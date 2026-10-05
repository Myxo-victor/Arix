/**
 * @author: Myxo victor
 * @description: Router configuration and route handling for the facilitator module.
 * @date: 2026-07-11
 */

const router = Chex.createRouter({
    '/': () => Explanation(),
    '/home': () => Home(),
    '/roommate': () => Roommate(),
    '/saved-lodges': () => Saved(),
    '/messages': () => Messages(),
    //'/settings': () => Settings(),
    '*': () => h2({},'404 - Page Not Found')
}, {mode: 'hash', base: '/facilitator/'});

// Returning users can skip onboarding; new users start at the onboarding flow.
if (router.path.value === "/" && localStorage.getItem('onboarded') === 'true') {
    router.navigate('/home');
}


document.addEventListener('click', (e) => {
    // A click belongs to either a desktop `.link` or a mobile `.tab`.
    // Use the matching item once, rather than querying a null tab/mtab.
    const navItem = e.target.closest('.link, .tab');
    if (!navItem) return;
    
    if (navItem.querySelector('.fa-home')) router.navigate('/home');
    //else if (navItem.querySelector('.fa-trophy')) router.navigate('/leaderboard');
    else if (navItem.querySelector('.fa-bookmark')) router.navigate('/saved-lodges');
    else if (navItem.querySelector('.fa-message')) router.navigate('/messages');
    //else if (navItem.querySelector('.fa-award')) router.navigate('/certificates');
    else if (navItem.querySelector('.fa-cog')) router.navigate('/settings');

});
/*
document.addEventListener('click', (e) => {
    const mtab = e.target.closest('.mobile-tab');
    if (!mtab) return;
    
    if (mtab.querySelector('.fa-chart-pie')) router.navigate('/');
    else if (mtab.querySelector('.fa-circle-play')) router.navigate('/live');
    else if (mtab.querySelector('.fa-book-open')) router.navigate('/assignments');
    else if (mtab.querySelector('.fa-pen-ruler')) router.navigate('/cbt');
    else if (mtab.querySelector('.fa-graduation-cap')) router.navigate('/performance');
    else if (mtab.querySelector('.fa-gun')) router.navigate('/games');
});
*/
/*
async function initializeApp() {
    const authenticated = await CheckAunth();

    if (authenticated) {
        Chex.render(app, () => {
            const page = router.view();
            page.key = router.path.value;
            return page;
        });
    }
}

initializeApp();
*/

Chex.render(app, () => {
    const page = router.view();
    page.key = router.path.value;
    return page;
});
