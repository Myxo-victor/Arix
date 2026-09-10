/**
 * @author Myxo Victor
 * @description This page handles Arix routing
 */


const router = Chex.createRouter({
    '/': () => Landing(),
    '/locations': () => Locations(),
    '/roommate': () => Roommate(),
    '/agent': () => Agent(),
    //'/register': () => Register(),
    '/login': () => Login(),
    '/register': () => Register(),
    '*': () => Chex.h2({},'404 - Page Not Found')
}, {mode: 'hash', base: '/'});

 // Redirect empty path
if (router.path.value === "/"){
     router.navigate("/");
}


document.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab, .link');

    if (!tab) return;
    e.preventDefault();
    const label = tab.textContent.trim();
    if (label === 'Home') router.navigate('/');
    else if (label === 'Roommate') router.navigate('/roommate');
    else if (label === 'Become Agent') router.navigate('/agent');
    else if (label === 'Our Locations') router.navigate('/locations');
});

document.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;

    if (btn.classList.contains('bko')) {
        e.preventDefault();
        router.navigate('/login');
    } else if (btn.classList.contains('bkc')) {
        e.preventDefault();
        router.navigate('/register');
    }else if(btn.classList.contains('f-cta1')){
        e.preventDefault();
        router.navigate('/login')
    }else if(btn.classList.contains('f-cta2')){
        e.preventDefault();
        router.navigate('/register')
    }else if(btn.classList.contains('LsignUp')){
        e.preventDefault();
        router.navigate('/register')
    }
});

window.router = router;
Chex.render(app, () => {
    if (window.manorbit) window.manorbit.destroyAll();

    const view = router.view();
    requestAnimationFrame(() => window.initializeArixAnimations?.());
    return view;
});