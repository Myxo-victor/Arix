/**
 * @author Myxo Victor
 * @copyright Aximon 2026
 * @description This file handles the components of Arix logged in user home page
 * @version 1.0.0 
 * @date 22 Sept. 2026
 */

const Home = () => div({ref: initializeHomeCarousels, onUnmount: cleanupHomeCarousels}, [
    div({class:'parent'},[
        nav([
            img({class:'logo', src:'./images/logo.png'}),
            div({class:'navi'},[
                p({class:'tab active'},[
                    i({class:'fa-solid fa-home'}),
                    'Home'
                ]),
                p({class:'tab'},[
                    i({class:'fa-solid fa-user-group'}),
                    'Roommates'
                ]),
                p({class:'tab'},[
                    i({class:'fa-regular fa-bookmark'}),
                    'Saved'
                ]),
                p({class:'tab'},[
                    i({class:'fa-regular fa-message'}),
                    'Messages'
                ]),
            ]),
            div({class:'line'}),
            div({class:'navi'},[
                div({class:'txt'},[
                   p('Account'),
                ]),
                p({class:'tab'},[
                    i({class:'fa-regular fa-user'}),
                    'Profile'
                ]),
                p({class:'tab'},[
                    i({class:'fa-solid fa-cog'}),
                    'Settings'
                ]),
            ]),
           /* //this button should be hidden for normal people searching for lodge that is role: student, but available for role: agent
            button({class:'pst'},[
                i({class:'fa-solid fa-add'}),
                'Post a lodge'
            ]),*/
            //profile card
            div({class:'p-card'},[
                img({class:'u-pro', src:'./images/arix-avatar.svg'}),
                div({class:''},[
                    p({class:'u-name'},'Myxo Victor'),
                    p({class:'sm-txt'},'Agent')
                ])
            ])
        ]),
        main([
            div({class:'top'},[
                p({class:'page-title'},'Home Page'),
                div({class:'icon-cta'},[
                    div({class:'search'},[
                        i({class:'fa-solid fa-search'})
                    ]),
                    div({class:'bell'},[
                        i({class:'fa-regular fa-bell'})
                    ])
                ])
            ]),
            //body - where things can appear
            div({class:'page-body'},[
                div({class:'lodges-section-header'},[
                    div([
                        h3({class:'pt'},'Recommended lodges'),
                        p({class:'sm-txt'},'10 lodges available around MOUAU')
                    ]),
                    div({class:'lodge-scroll-controls'},[
                        button({
                            class:'lodge-scroll-button',
                            type:'button',
                            'aria-label':'Show previous lodges',
                            onClick: function () { scrollRecommendedLodges(-1); }
                        }, i({class:'fa-solid fa-chevron-left'})),
                        button({
                            class:'lodge-scroll-button',
                            type:'button',
                            'aria-label':'Show more lodges',
                            onClick: function () { scrollRecommendedLodges(1); }
                        }, i({class:'fa-solid fa-chevron-right'}))
                    ])
                ]),
                
                //sponsored/recomended lodges
            div({class:'lodge-flex', id: 'recommended-lodges'}, [
                div({class:'spon-card'}, [
                p({class:'posted-by'},[
                    'Findex Lodge',
                   img({class:'mark', src:'./images/badge.png', alt:'Verified Agent'}),
                ]),
                div([
                img({class:'spon-img', src:'./images/room.jpg', alt:'Arix Student bedroom', id:'spon-img1'}),
                img({class:'spon-img', src:'./images/property.jpg', alt:'Arix student toilet', id:'spon-img2'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Arix student kitchen', id:'spon-img3'}),
                ]),
                div({class:'spon-tool'},[
                    p({class:'post-ti'},'2 days ago'),
                    //click to add to save
                    i({class:'fa-regular fa-bookmark savei'})
                ]),
                div({class:'spon-desc'},[
                p({class:'price-spon'},[
                  span({class:'prev-pr'},'₦170,000/yr'),
                  span({class:'appr'},'~'),
                  span({class:'cur-pr'},'₦150,000/yr'),
                ]),
                div({class:'new-flx'},[
                    div([
                       p({class:'lodge-type'},'Self Contain, Umudike'),
                       p({class:'lodge-location'},'Back of Admin'),
                    ]),
                    div({class:'views'},[
                        i({class:'fa-regular fa-eye'}),
                        '499'
                    ])
                ]),
                button({class:'lodge-cta'},'View Lodge')
                ])
            ]),
            div({class:'spon-card'}, [
                p({class:'posted-by'},[
                    'Prince Housing',
                   //Agent not verified //img({class:'badge', src:'./images/badge.png', alt:'Verified Agent'})
                ]),
                div([
                img({class:'spon-img', src:'./images/property.jpg', alt:'Student housing', id:'spon-img4'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'spon-img5'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'spon-img6'}),
                ]),
                div({class:'spon-tool'},[
                    p({class:'post-ti'},'1 hour ago'),
                    //click to add to save
                    i({class:'fa-regular fa-bookmark savei'})
                   ]),
                div({class:'spon-desc'},[
                p({class:'price-spon'},[
                  span({class:'prev-pr'},'₦200,000/yr'),
                  span({class:'appr'},'~'),
                  span({class:'cur-pr'},'₦180,000/yr'),
                ]),
                div({class:'new-flx'},[
                    div([
                       p({class:'lodge-type'},'Self Contain, Umudike'),
                       p({class:'lodge-location'},'Crowncut'),
                    ]),
                    div({class:'views'},[
                        i({class:'fa-regular fa-eye'}),
                        '499'
                    ])
                ]),
                button({class:'lodge-cta'},'View Lodge')
                ])
            ]),
            div({class:'spon-card'}, [
                p({class:'posted-by'},[
                    'Prince Housing',
                   //Agent not verified //img({class:'badge', src:'./images/badge.png', alt:'Verified Agent'})
                ]),
                div([
                img({class:'spon-img', src:'./images/property.jpg', alt:'Student housing', id:'spon-img10'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'spon-img11'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'spon-img12'}),
                ]),
                div({class:'spon-tool'},[
                    p({class:'post-ti'},'1 hour ago'),
                    //click to add to save
                    i({class:'fa-regular fa-bookmark savei'})
                   ]),
                div({class:'spon-desc'},[
                p({class:'price-spon'},[
                  span({class:'prev-pr'},'₦200,000/yr'),
                  span({class:'appr'},'~'),
                  span({class:'cur-pr'},'₦180,000/yr'),
                ]),
                div({class:'new-flx'},[
                    div([
                       p({class:'lodge-type'},'Self Contain, Umudike'),
                       p({class:'lodge-location'},'Crowncut'),
                    ]),
                    div({class:'views'},[
                        i({class:'fa-regular fa-eye'}),
                        '499'
                    ])
                ]),
                button({class:'lodge-cta'},'View Lodge')
                ])
            ]),
            div({class:'spon-card'}, [
                p({class:'posted-by'},[
                    'Emmanuel Kingsley',
                   //img({class:'badge', src:'./images/badge.png', alt:'Verified Agent'})
                ]),
                div([
                img({class:'spon-img', src:'./images/property.jpg', alt:'Student housing', id:'spon-img7'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'spon-img8'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'spon-img9'}),
                ]),
                div({class:'spon-tool'},[
                    p({class:'post-ti'},'1 day ago'),
                    //click to add to save
                    i({class:'fa-regular fa-bookmark savei'})
                   ]),
                div({class:'spon-desc'},[
                p({class:'price-spon'},[
                  span({class:'prev-pr'},'₦150,000/yr'),
                  span({class:'appr'},'~'),
                  span({class:'cur-pr'},'₦120,000/yr'),
                ]),
                div({class:'new-flx'},[
                    div([
                       p({class:'lodge-type'},'Self Contain, Umudike'),
                       p({class:'lodge-location'},'Back of Stadium'),
                    ]),
                    div({class:'views'},[
                        i({class:'fa-regular fa-eye'}),
                        '499'
                    ])
                ]),
                button({class:'lodge-cta'},'View Lodge')
                ])
            ]),

            ]),
        br(),br(),
            //normal lodges
        div({class:'fil-lod'},[
           div({class:'fil-card'}, [
                p({class:'posted-by'},[
                    'Findex Lodge',
                   img({class:'mark', src:'./images/badge.png', alt:'Verified Agent'})
                ]),
                div([
                img({class:'spon-img', src:'./images/property.jpg', alt:'Student housing', id:'fn-img1'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'fn-img2'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'fn-img3'}),
                ]),
                div({class:'spon-tool'},[
                    p({class:'post-ti'},'3 hours ago'),
                    //click to add to save
                    i({class:'fa-regular fa-bookmark savei'})
                   ]),
                div({class:'spon-desc'},[
                p({class:'price-spon'},[
                  span({class:'prev-pr'},'₦170,000/yr'),
                  span({class:'appr'},'~'),
                  span({class:'cur-pr'},'₦150,000/yr'),
                ]),
                div({class:'new-flx'},[
                    div([
                       p({class:'lodge-type'},'Self Contain, Umudike'),
                       p({class:'lodge-location'},'Back of Admin'),
                    ]),
                    div({class:'views'},[
                        i({class:'fa-regular fa-eye'}),
                        '499'
                    ])
                ]),
                button({class:'lodge-cta'},'View Lodge')
                ])
            ]),

           div({class:'fil-card'}, [
                p({class:'posted-by'},[
                    'Findex Lodge',
                   img({class:'mark', src:'./images/badge.png', alt:'Verified Agent'})
                ]),
                div([
                img({class:'spon-img', src:'./images/property.jpg', alt:'Student housing', id:'fn-img4'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'fn-img5'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'fn-img6'}),
                ]),
                div({class:'spon-tool'},[
                    p({class:'post-ti'},'3 hours ago'),
                    //click to add to save
                    i({class:'fa-regular fa-bookmark savei'})
                   ]),
                div({class:'spon-desc'},[
                p({class:'price-spon'},[
                  span({class:'prev-pr'},'₦170,000/yr'),
                  span({class:'appr'},'~'),
                  span({class:'cur-pr'},'₦150,000/yr'),
                ]),
                div({class:'new-flx'},[
                    div([
                       p({class:'lodge-type'},'Self Contain, Umudike'),
                       p({class:'lodge-location'},'Back of Admin'),
                    ]),
                    div({class:'views'},[
                        i({class:'fa-regular fa-eye'}),
                        '499'
                    ])
                ]),
                button({class:'lodge-cta'},'View Lodge')
                ])
            ]),

        ])
    ])
        ]),
    ])
])
























let homeCarousels = [];
let homeCarouselMountQueued = false;

function scrollRecommendedLodges(direction) {
    const lodgeList = document.getElementById('recommended-lodges');
    if (!lodgeList) return;

    lodgeList.scrollBy({
        left: direction * Math.min(lodgeList.clientWidth * 0.85, 420),
        behavior: 'smooth'
    });
}

function initializeHomeCarousels(container) {
    // Chex creates refs before child images, so wait until this route is mounted.
    if (homeCarouselMountQueued) return;
    homeCarouselMountQueued = true;

    queueMicrotask(function () {
        homeCarouselMountQueued = false;
        if (!container.isConnected) return;

        homeCarousels.forEach(function (carousel) {
            carousel.destroy();
        });

        homeCarousels = [
            ['spon-img1', 'spon-img2', 'spon-img3'],
            ['spon-img4', 'spon-img5', 'spon-img6'],
            ['spon-img7', 'spon-img8', 'spon-img9'],
            ['spon-img10', 'spon-img11', 'spon-img12'],
            ['fn-img1', 'fn-img2', 'fn-img3'],
            ['fn-img4', 'fn-img5', 'fn-img6']
        ].map(function (IDs) {
            return manorbit.slides({
                IDs: IDs,
                interval: 1000,
                dots: true
            });
        });
    });
}





function cleanupHomeCarousels() {
    homeCarousels.forEach(function (carousel) {
        carousel.destroy();
    });
    homeCarousels = [];
}
