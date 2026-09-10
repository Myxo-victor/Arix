 /**
  * @author Myxo victor
  * @description Arix student housing and property listings landing page
  */
 const app = document.getElementById('app');

 
const scrollContainerId = 'sponsoredLodgeFlex';

 const {div, h1, h2, h3, p, span, label, img, header, footer, section, br,  button, input, nav, a, i, select, option, strong, small} = Chex;

const Landing = () => div([
    header([
       img({class:'logo', src:'./images/logo.svg', alt:'Arix Logo'}),

       nav([
        a({class:'link active', href:'#/'},[
            'Home'
        ]),
        a({class:'link', href:'/#/'},[
            'Our Locations'
        ]),
        a({class:'link', href:'#/roommate'},[
            'Roommate'
        ]),
        a({class:'link', href:'#/agent'},[
            'Become Agent'
        ]),
        a({class:'link', href:'#/'},[
            'Contact Us '
        ]),
       ]),

       div({class:'cta'},[
        button({class:'bko'},'Login'),
        button({class:'bkc'},'Sign Up')
       ])
    ]),
    br(),br(),br(),
    //Mobile navigation
    div({class:'mobile-nav'},[
        ul([
            li([
                a({href:'#/', class:'active'},'Home'),
            ]),
            li([
                a({href:'#/', class:''},'Location'),
            ]),
            li([
                a({href:'#/', class:''},'Roommate'),
            ]),
            li([
                a({href:'#/', class:''},'Become agent'),
            ]),
            li([
                a({href:'#/', class:''},'Contact Us'),
            ]),
        ])
    ]),
    
    //Hero section
    div({class:'hero'},[
        //First Layer
       div({class:'first-layer'},[
          h1({class:'f-title'},'Finding a Lodge Shouldn\'t Be This Stressful.'),
          p({},'Discover student housing, connect with trusted property agents, split the cost when you need to, and find roommates who actually fit your lifestyle.'),
          div({class:'cta-f'},[
            button({class:'f-cta1'},'Find My Lodge'),
            button({class:'f-cta2'},'Find A Roommate')
          ])
       ]),

       div({class:'second-layer'},[
          img({class:'hero-image', src:'./images/housing.jpg', alt:'Arix housing'}),
          div({class:'overlay'},[
            button({class:'play-button'},[
                i({class:'fa-solid fa-play'})
            ])
          ])
       ]),

       div({class:'last-layer'},[
          img({class:'last', src:'./images/property.jpg', alt:'Arix listing of properties'}),
          p({},'Give Your Properties the Visibility They Deserve.'),
          img({class:'last', src:'./images/room.jpg', alt:'Arix room listings'}),
          p({class:'pz'},'Reach students actively searching for housing, showcase your listings professionally, and connect with potential tenants from one place.'),
          button({class:'agn'},'List Your Property')
       ]),

    ]),

   // Sponsored Lodges
    div({class:'sponsored'}, [
        div({class:'sponsored-header'}, [
            h1({}, 'Places Students Are Loving'),
            div({class:'scroll-btn-group'}, [
                button({
                    class: 'scroll-nav-btn', 
                    onclick: () => document.getElementById(scrollContainerId).scrollBy({ left: -420, behavior: 'smooth' })
                }, [i({class: 'fa-solid fa-chevron-left'})]),
                button({
                    class: 'scroll-nav-btn', 
                    onclick: () => document.getElementById(scrollContainerId).scrollBy({ left: 420, behavior: 'smooth' })
                }, [i({class: 'fa-solid fa-chevron-right'})])
            ])
        ]),
        div({class:'lodge-flex', id: scrollContainerId}, [
            div({class:'spon-card'}, [
                p({class:'posted-by'},[
                    'Findex Lodge',
                   img({class:'badge', src:'./images/badge.png', alt:'Verified Agent'}),
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
                p({class:'lodge-type'},'Self Contain, Umudike'),
                p({class:'lodge-location'},'Back of Admin'),
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
                p({class:'lodge-type'},'Self Contain, Umudike'),
                p({class:'lodge-location'},'Crowncut'),
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
                p({class:'lodge-type'},'Self Contain, Umudike'),
                p({class:'lodge-location'},'Back of Stadium'),
                button({class:'lodge-cta'},'View Lodge')
                ])
            ]),
            div({class:'spon-card'}, [
                p({class:'posted-by'},[
                    'Ebuka Chijindu',
                   img({class:'badge', src:'./images/badge.png', alt:'Verified Agent'})
                ]),
                div([
                img({class:'spon-img', src:'./images/property.jpg', alt:'Student housing', id:'spon-img10'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'spon-img11'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'spon-img12'}),
                ]),
                div({class:'spon-tool'},[
                    p({class:'post-ti'},'2 days ago'),
                    //click to add to save
                    i({class:'fa-regular fa-bookmark savei'})
                   ]),
                div({class:'spon-desc'},[
                p({class:'price-spon'},[
                  span({class:'prev-pr'},'₦150,000/yr'),
                  span({class:'appr'},'~'),
                  span({class:'cur-pr'},'₦135,000/yr'),
                ]),
                p({class:'lodge-type'},'Self Contain, Umudike'),
                p({class:'lodge-location'},'Ama-oba'),
                button({class:'lodge-cta'},'View Lodge')
                ])
            ]),
            div({class:'spon-card'}, [
                p({class:'posted-by'},[
                    'Escoba',
                  // img({class:'badge', src:'./images/badge.png', alt:'Verified Agent'})
                ]),
                div([
                img({class:'spon-img', src:'./images/property.jpg', alt:'Student housing', id:'spon-img13'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'spon-img14'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'spon-img15'}),
                ]),
                div({class:'spon-tool'},[
                    p({class:'post-ti'},'5 days ago'),
                    //click to add to save
                    i({class:'fa-regular fa-bookmark savei'})
                   ]),
                div({class:'spon-desc'},[
                p({class:'price-spon'},[
                  span({class:'prev-pr'},'₦170,000/yr'),
                  span({class:'appr'},'~'),
                  span({class:'cur-pr'},'₦150,000/yr'),
                ]),
                p({class:'lodge-type'},'Self Contain, Absu'),
                p({class:'lodge-location'},'South Africa str.'),
                button({class:'lodge-cta'},'View Lodge')
                ])
            ]),
            div({class:'spon-card'}, [
                p({class:'posted-by'},[
                    'Findex Lodge',
                   img({class:'badge', src:'./images/badge.png', alt:'Verified Agent'})
                ]),
                div([
                img({class:'spon-img', src:'./images/property.jpg', alt:'Student housing', id:'spon-img16'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'spon-img17'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'spon-img18'}),
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
                p({class:'lodge-type'},'Self Contain, Umudike'),
                p({class:'lodge-location'},'Back of Admin'),
                button({class:'lodge-cta'},'View Lodge')
                ])
            ]),
            div({class:'spon-card'}, [
                p({class:'posted-by'},[
                    'Indox',
                   img({class:'badge', src:'./images/badge.png', alt:'Verified Agent'})
                ]),
                div([
                img({class:'spon-img', src:'./images/property.jpg', alt:'Student housing', id:'spon-img19'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'spon-img20'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'spon-img21'}),
                ]),
                div({class:'spon-tool'},[
                    p({class:'post-ti'},'1 week ago'),
                    //click to add to save
                    i({class:'fa-regular fa-bookmark savei'})
                   ]),
                div({class:'spon-desc'},[
                p({class:'price-spon'},[
                  span({class:'prev-pr'},'₦170,000/yr'),
                  span({class:'appr'},'~'),
                  span({class:'cur-pr'},'₦150,000/yr'),
                ]),
                p({class:'lodge-type'},'Self Contain, Umudike'),
                p({class:'lodge-location'},'Back of Admin'),
                button({class:'lodge-cta'},'View Lodge')
                ])
            ]),
        ])
    ]),

    //Available lodges
    div({class:'avai'},[
        h1('Find a Place You’ll Feel Good Calling Home.'),
        p('Compare available student lodges by location, price, and property type — so you can make a confident choice without wasting days searching.'),
        //filter
        div({class:'filter-con'},[
            //case holding each input filter
            div({class:'field-case'},[
                p([
                    i({class:'fa-solid fa-map-marker-alt map'}),
                    ' Where do you want to live?'
                ]),
                select({class:'select'},[
                    option({value:''},'Choose an area'),
                    option({value:'Umudike,MOUAU'},'Umudike, MOUAU'),
                    option({value:'Uturu,ABSU'},'Uturu, Absu'),
                    option({value:'Aba,Ogbennaya Onu Polythenic'},'Aba, Ogbennaya Onu Polythenic'),
                ])
            ]),
            div({class:'field-case'},[
                p([
                 i({class:'fa-solid fa-house home'}),
                 ' What kind of place are you looking for?'
                ]),
                select({class:'select'},[
                    option({value:'all'},'All Types'),
                    option({value:'Self-contain'},'Self-contain'),
                    option({value:'Single Room'},'Single Room'),
                    option({value:'1 Bed Room Flat'},'1 Bed Room Flat'),
                    option({value:'2 Bed Room Flat'},'2 Bed Room Flat'),
                ])
            ]),
            div({class:'field-case'},[
                p([
                 i({class:'fa-solid fa-wallet wallet'}),
                 ' What fits your budget? (₦)'
                ]),
                input({class:'input-e', placeholder:'₦ eg:150,000', type:'number', name:'amount'})
            ]),
            //cta
            button({
                class:'fim-cta'
            },[
                'Find My Lodge ',
                i({class:'fa-solid fa-arrow-right'})
            ])
        ]),
        //results of lodges - whether filtered or unfiltered (maxed content to fetch on a normal is 5 image cards)
        div({class:'fil-lod'},[
           div({class:'fil-card'}, [
                p({class:'posted-by'},[
                    'Findex Lodge',
                   img({class:'badge', src:'./images/badge.png', alt:'Verified Agent'})
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
                p({class:'lodge-type'},'Self Contain, Umudike'),
                p({class:'lodge-location'},'Back of Admin'),
                button({class:'lodge-cta'},'View Lodge')
                ])
            ]),

           div({class:'fil-card'}, [
                p({class:'posted-by'},[
                    'Findex Lodge',
                   img({class:'badge', src:'./images/badge.png', alt:'Verified Agent'})
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
                p({class:'lodge-type'},'Self Contain, Umudike'),
                p({class:'lodge-location'},'Back of Admin'),
                button({class:'lodge-cta'},'View Lodge')
                ])
            ]),

           div({class:'fil-card'}, [
                p({class:'posted-by'},[
                    'Findex Lodge',
                   img({class:'badge', src:'./images/badge.png', alt:'Verified Agent'})
                ]),
                div([
                img({class:'spon-img', src:'./images/property.jpg', alt:'Student housing', id:'fn-img7'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'fn-img8'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'fn-img9'}),
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
                p({class:'lodge-type'},'Self Contain, Umudike'),
                p({class:'lodge-location'},'Back of Admin'),
                button({class:'lodge-cta'},'View Lodge')
                ])
            ]),
            
           div({class:'fil-card'}, [
                p({class:'posted-by'},[
                    'Findex Lodge',
                   img({class:'badge', src:'./images/badge.png', alt:'Verified Agent'})
                ]),
                div([
                img({class:'spon-img', src:'./images/property.jpg', alt:'Student housing', id:'fn-img10'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'fn-img11'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'fn-img12'}),
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
                p({class:'lodge-type'},'Self Contain, Umudike'),
                p({class:'lodge-location'},'Back of Admin'),
                button({class:'lodge-cta'},'View Lodge')
                ])
            ]),
            
           div({class:'fil-card'}, [
                p({class:'posted-by'},[
                    'Findex Lodge',
                   img({class:'badge', src:'./images/badge.png', alt:'Verified Agent'})
                ]),
                div([
                img({class:'spon-img', src:'./images/property.jpg', alt:'Student housing', id:'fn-img13'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'fn-img14'}),
                img({class:'spon-img', src:'./images/room.jpg', alt:'Student housing', id:'fn-img15'}),
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
                p({class:'lodge-type'},'Self Contain, Umudike'),
                p({class:'lodge-location'},'Back of Admin'),
                button({class:'lodge-cta'},'View Lodge')
                ])
            ]),
        ])
    ]),
    //Trsut/Risk reduction section
    div({class:'trs'},[
        h1({class:'h1'},'A Better Way to Find Your Next Lodge.'),
        p({class:'p'},'Because finding a place to live shouldn\'t mean guessing who to trust.'),
        div({class:'trs-flex'},[
            div({class:'trs-card'},[
                div({class:'trs-content'},[
                    div({class:'trs-icon'},[
                        i({class:'fa-solid fa-user-shield'})
                    ]),
                    h3('Verified Property Providers'),
                    p('Know who you\'re dealing with before you make contact.')
                ]),
                div({class:'bt-circle'},[])
            ]),

            div({class:'trs-card'},[
                div({class:'trs-content'},[
                    div({class:'trs-icon gi'},[
                        i({class:'fa-solid fa-house-circle-check'})
                    ]),
                    h3('Real Listings'),
                    p('See available properties with clear pricing, location and property details.')
                ]),
                div({class:'bt-circle'},[])
            ]),

            div({class:'trs-card'},[
                div({class:'trs-content'},[
                    div({class:'trs-icon lgi'},[
                        i({class:'fa-solid fa-lock'})
                    ]),
                    h3('Safer Transactions'),
                    p('Built with security in mind, so you can make decisions with greater confidence.')
                ]),
                div({class:'bt-circle'},[])
            ]),

            div({class:'trs-card'},[
                div({class:'trs-content'},[
                    div({class:'trs-icon bi'},[
                        i({class:'fa-solid fa-graduation-cap'})
                    ]),
                    h3('Built for Students'),
                    p('Search around your school, budget and lifestyle — without the usual housing stress.')
                ]),
                div({class:'bt-circle'},[])
            ]),
        ])
    ]),

    //Uncertainty section
    div({class:'ucs'},[
        div({class:'uns-conside'},[
            h1({},'Search With More Confidence.'),
            p({},'Every housing decision matters. Arix is designed to give you clearer information, better options, and more confidence before you take the next step.')
        ]),
        div({class:'uns-com'},[
            div({class:'uns-card'},[
                div({class:'uns-card-flex'},[
                    div({class:'sm-icon'},[
                    i({class:'fa-solid fa-user-check'}),
                    ]),
                    p({class:'uns-title'},'Verified provider')
                ]),
                p({class:'uns-sub'},'Know who you\'re dealing with.')
            ]),
            div({class:'uns-card'},[
                div({class:'uns-card-flex'},[
                    div({class:'sm-icon'},[
                    span('₦')
                    ]),
                    p({class:'uns-title'},'Clear pricing')
                ]),
                p({class:'uns-sub'},'Know what you\'re considering before you reach out.')]),
            div({class:'uns-card'},[
                div({class:'uns-card-flex'},[
                    div({class:'sm-icon'},[
                    i({class:'fa-solid fa-house'}),
                    ]),
                    p({class:'uns-title'},'Property details')
                ]),
                p({class:'uns-sub'},'Understand the property and where it\'s located.')]),
            div({class:'uns-card'},[
                div({class:'uns-card-flex'},[
                    div({class:'sm-icon'},[
                    i({class:'fa-solid fa-comments'}),
                    ]),
                    p({class:'uns-title'},'Secure communication')
                ]),
                p({class:'uns-sub'},'Take the next step with greater confidence.')]),
        ])
    ]),
    //Testimonial section
    div({class:'testi'},[
        h1({class:'h1'},'Students Are Finding Their Way Home With Arix.'),
        p({class:'p'},'Real experiences from students navigating campus housing.'),
        div({class:'testimonial'},[
            div({class:'testi-card'},[
                div({class:'testi-top'},[
                    p({class:'labeled'},'Student experience')
                ]),
                div({class:'card-body'},[
                    i({class:'fa-solid fa-quote-left quote'}),
                    p({class:'testi-text'},'Have been walking around back of admin not knowing that there is an app like this.')
                ]),
                div({class:'card-footer'},[
                    img({class:'st-prof', src:'./images/te1.jpg', alt:'Arix student\'s testimonial profile photo'}),
                    div({class:'st-info'},[
                        p({class:'st-name'},'Ugwumba Chizzy'),
                        p({class:'st-school'},'Umudike, MOUAU')
                    ])
                ])
            ]),
            div({class:'testi-card'},[
                div({class:'testi-top'},[
                    p({class:'labeled'},'Student experience')
                ]),
                div({class:'card-body'},[
                    i({class:'fa-solid fa-quote-left quote'}),
                    p({class:'testi-text'},'As a new student, Arix helped me find verified agents around campus and saved me a lot of stress. All thanks to the Arix team! ❤️')
                ]),
                div({class:'card-footer'},[
                    img({class:'st-prof', src:'./images/te2.jpg', alt:'Arix student\'s testimonial profile photo'}),
                    div({class:'st-info'},[
                        p({class:'st-name'},'Emmanuel'),
                        p({class:'st-school'},'Umudike, MOUAU')
                    ])
                ])]),
            div({class:'testi-card'},[
                div({class:'testi-top'},[
                    p({class:'labeled'},'Student experience')
                ]),
                div({class:'card-body'},[
                    i({class:'fa-solid fa-quote-left quote'}),
                    p({class:'testi-text'},'Nothing much to say, I found a good lodge in this App.')
                ]),
                div({class:'card-footer'},[
                    img({class:'st-prof', src:'./images/te3.jpg', alt:'Arix student\'s testimonial profile photo'}),
                    div({class:'st-info'},[
                        p({class:'st-name'},'Sophia'),
                        p({class:'st-school'},'Uturu, ABSU')
                    ])
                ])]),
        ])
    ]),
    //Simple process section
    div({class:'process'},[
        h1({class:'process-title'},'Find Your Lodge Without the Runaround.'),
        p({class:'process-sub'},'A straightforward path from searching to finding the right place.'),
        div({class:'process-flex'},[
            div({class:'process-line'},[
                div({class:'process-card'},[
                    div({class:'process-number'},['01']),
                    i({class:'fa-solid fa-sliders ic'}),
                    p({class:'process-text-title'},'Tell us what you need'),
                    p({class:'process-text-sub'},'Choose your school area, property type and budget.')
                ]),
                div({class:'process-card'},[
                    div({class:'process-number'},['02']),
                    i({class:'fa-solid fa-magnifying-glass ic'}),
                    p({class:'process-text-title'},'Explore your options'),
                    p({class:'process-text-sub'},'Compare available lodges that fit your search.')
                ]),
                div({class:'process-card'},[
                    div({class:'process-number'},['03']),
                    i({class:'fa-solid fa-file-circle-check ic'}),
                    p({class:'process-text-title'},'Check the details'),
                    p({class:'process-text-sub'},'Review the property, location and provider before reaching out.')
                ]),
                div({class:'process-card'},[
                    div({class:'process-number'},['04']),
                    i({class:'fa-solid fa-arrow-right ic'}),
                    p({class:'process-text-title'},'Take the next step'),
                    p({class:'process-text-sub'},'Contact the provider and move forward with confidence.')
                ]),
            ])
        ]),
        p({class:'process-sub2'},[
            'Simple ',
            i({class:'fa-solid fa-arrow-right'}),
            ' Clear ',
            i({class:'fa-solid fa-arrow-right'}),
            ' Confident ',
        ])
    ]),
    //More than listing section
    div({class:'more'},[
        h1({class:''},'Housing Is More Than Finding Four Walls.'),
        p({class:'more-sub'},'The right housing decision depends on more than price and location.'),
        div({class:'more-flex'},[
            div({class:'more-card'},[
                h3('Can\'t afford it alone?'),
                p({class:'more-title'},'Split the cost with people you trust.'),
                a({class:'more-link', href:'#'},[
                    'Make housing more manageable ',
                    i({class:'fa-solid fa-arrow-right'})
                ]),
                div({class:'prove'},[
                    img({class:'prove-img', src:'./images/prove.png', alt:'Arix student housing proof of concept'})
                ])
            ]),
            div({class:'more-card'},[
                h3('Don\'t want to live alone?'),
                p({class:'more-title'},'Find roommates who actually fit your lifestyle.'),
                a({class:'more-link', href:'#'},[
                    'Find your kind of roommate ',
                    i({class:'fa-solid fa-arrow-right'})
                ]),
                div({class:'prove'},[
                    img({class:'prove-img', src:'./images/prove2.png', alt:'Arix student housing proof of concept'})
                ])]),
            div({class:'more-card'},[
                h3('Worried about who you\'re dealing with?'),
                p({class:'more-title'},'Discover verified property providers and make more informed decisions.'),
                a({class:'more-link', href:'#'},[
                    'See verified providers ',
                    i({class:'fa-solid fa-arrow-right'})
                ]),
                div({class:'prove'},[
                    img({class:'prove-img', src:'./images/prove3.png', alt:'Arix student housing proof of concept'})
                ])]),
            div({class:'more-card', style:'height: 370px'},[
                h3('Found a place but need directions?'),
                p({class:'more-title'},'Get location-based assistance when it\'s time to find your way there.'),
                a({class:'more-link', href:'#'},[
                    'Find your way there ',
                    i({class:'fa-solid fa-arrow-right'})
                ]),
                div({class:'prove'},[
                    img({class:'prove-img', src:'./images/prove4.png', alt:'Arix student housing proof of concept'})
                ])]),
        ]),
    ]),
    //better housing experience section
    div({class:'better'},[
        h1({class:'better-title'},'Imagine Your Lodge Search Without the Stress.'),
        p('No endless scrolling through scattered listings.'),
        p('No guessing what fits your budget.'),
        p('No wasting days chasing unavailable rooms.'),
        p({class:'better-sub'},'Just better options, clearer information, and a simpler way to find somewhere that feels right.'),
        button({class:'better-cta'},[
            'Find My Lodge',
            i({class:'fa-solid fa-arrow-right'})
        ]),
    ]),
    //Faq section 
    section({ class: "faq-section" }, [
    div({ class: "container" }, [
        div({ class: "faq-layout" }, [

            div({ class: "faq-heading" }, [
                span({ class: "section-label" }, [
                    i({ class: "fa-solid fa-circle-question" }),
                    "Need clarity?"
                ]),

                h2("Still Have Questions?")
            ]),

            div({ class: "faq" }, [
                button({
                    class: "faq-question",
                    type: "button",
                    onClick: (e) => {
                        const faq = e.currentTarget.parentElement;
                        const answer = faq.querySelector(".faq-answer");
                        const icon = e.currentTarget.querySelector("i");
                        const isOpen = faq.classList.contains("faq-open");

                        document.querySelectorAll(".faq.faq-open").forEach(item => {
                            if (item !== faq) {
                                item.classList.remove("faq-open");

                                const otherAnswer = item.querySelector(".faq-answer");
                                const otherIcon = item.querySelector(".faq-question i");

                                if (otherAnswer) otherAnswer.style.maxHeight = null;
                                if (otherIcon) otherIcon.classList.remove("faq-icon-open");
                            }
                        });

                        if (isOpen) {
                            faq.classList.remove("faq-open");
                            answer.style.maxHeight = null;
                            icon.classList.remove("faq-icon-open");
                        } else {
                            faq.classList.add("faq-open");
                            answer.style.maxHeight = answer.scrollHeight + "px";
                            icon.classList.add("faq-icon-open");
                        }
                    }
                }, [
                    "Are the property providers verified?",
                    i({ class: "fa-solid fa-chevron-down" })
                ]),

                div({ class: "faq-answer" },
                    "Yes. We try as much as we can to make sure property providers are verified before they can list a property on Arix. We don't just want anyone uploading random lodges and photos. We check the provider and the information attached to their listings, and suspicious listings can be flagged and reviewed."
                )
            ]),

            div({ class: "faq" }, [
                button({
                    class: "faq-question",
                    type: "button",
                    onClick: (e) => {
                        const faq = e.currentTarget.parentElement;
                        const answer = faq.querySelector(".faq-answer");
                        const icon = e.currentTarget.querySelector("i");
                        const isOpen = faq.classList.contains("faq-open");

                        document.querySelectorAll(".faq.faq-open").forEach(item => {
                            if (item !== faq) {
                                item.classList.remove("faq-open");

                                const otherAnswer = item.querySelector(".faq-answer");
                                const otherIcon = item.querySelector(".faq-question i");

                                if (otherAnswer) otherAnswer.style.maxHeight = null;
                                if (otherIcon) otherIcon.classList.remove("faq-icon-open");
                            }
                        });

                        if (isOpen) {
                            faq.classList.remove("faq-open");
                            answer.style.maxHeight = null;
                            icon.classList.remove("faq-icon-open");
                        } else {
                            faq.classList.add("faq-open");
                            answer.style.maxHeight = answer.scrollHeight + "px";
                            icon.classList.add("faq-icon-open");
                        }
                    }
                }, [
                    "How do I know if a lodge is still available?",
                    i({ class: "fa-solid fa-chevron-down" })
                ]),

                div({ class: "faq-answer" },
                    "We know how frustrating it is to see a lodge online, only to hear that it was already taken. That's one of the problems Arix is built to reduce. Listings are expected to be kept up to date, and you can also contact the provider directly before making any payment to confirm that the room is still available."
                )
            ]),

            div({ class: "faq" }, [
                button({
                    class: "faq-question",
                    type: "button",
                    onClick: (e) => {
                        const faq = e.currentTarget.parentElement;
                        const answer = faq.querySelector(".faq-answer");
                        const icon = e.currentTarget.querySelector("i");
                        const isOpen = faq.classList.contains("faq-open");

                        document.querySelectorAll(".faq.faq-open").forEach(item => {
                            if (item !== faq) {
                                item.classList.remove("faq-open");

                                const otherAnswer = item.querySelector(".faq-answer");
                                const otherIcon = item.querySelector(".faq-question i");

                                if (otherAnswer) otherAnswer.style.maxHeight = null;
                                if (otherIcon) otherIcon.classList.remove("faq-icon-open");
                            }
                        });

                        if (isOpen) {
                            faq.classList.remove("faq-open");
                            answer.style.maxHeight = null;
                            icon.classList.remove("faq-icon-open");
                        } else {
                            faq.classList.add("faq-open");
                            answer.style.maxHeight = answer.scrollHeight + "px";
                            icon.classList.add("faq-icon-open");
                        }
                    }
                }, [
                    "Can I contact the property provider before paying?",
                    i({ class: "fa-solid fa-chevron-down" })
                ]),

                div({ class: "faq-answer" },
                    "Yes. You should be able to ask questions, confirm the lodge details and arrange an inspection before committing your money. Arix is not about asking you to blindly pay for a room you haven't confirmed. Where applicable, payment protection is designed to give you another layer of security."
                )
            ]),

            div({ class: "faq" }, [
                button({
                    class: "faq-question",
                    type: "button",
                    onClick: (e) => {
                        const faq = e.currentTarget.parentElement;
                        const answer = faq.querySelector(".faq-answer");
                        const icon = e.currentTarget.querySelector("i");
                        const isOpen = faq.classList.contains("faq-open");

                        document.querySelectorAll(".faq.faq-open").forEach(item => {
                            if (item !== faq) {
                                item.classList.remove("faq-open");

                                const otherAnswer = item.querySelector(".faq-answer");
                                const otherIcon = item.querySelector(".faq-question i");

                                if (otherAnswer) otherAnswer.style.maxHeight = null;
                                if (otherIcon) otherIcon.classList.remove("faq-icon-open");
                            }
                        });

                        if (isOpen) {
                            faq.classList.remove("faq-open");
                            answer.style.maxHeight = null;
                            icon.classList.remove("faq-icon-open");
                        } else {
                            faq.classList.add("faq-open");
                            answer.style.maxHeight = answer.scrollHeight + "px";
                            icon.classList.add("faq-icon-open");
                        }
                    }
                }, [
                    "What happens if I find a problem with a listing?",
                    i({ class: "fa-solid fa-chevron-down" })
                ]),

                div({ class: "faq-answer" },
                    "Let us know. If something doesn't look right — maybe the photos don't match the lodge, the information is misleading, or someone appears to be copying another agent's listing — you can report it to Arix. We can review the listing and take action where necessary. We'd rather remove a questionable listing than leave students to figure it out themselves."
                )
            ]),

            div({ class: "faq" }, [
                button({
                    class: "faq-question",
                    type: "button",
                    onClick: (e) => {
                        const faq = e.currentTarget.parentElement;
                        const answer = faq.querySelector(".faq-answer");
                        const icon = e.currentTarget.querySelector("i");
                        const isOpen = faq.classList.contains("faq-open");

                        document.querySelectorAll(".faq.faq-open").forEach(item => {
                            if (item !== faq) {
                                item.classList.remove("faq-open");

                                const otherAnswer = item.querySelector(".faq-answer");
                                const otherIcon = item.querySelector(".faq-question i");

                                if (otherAnswer) otherAnswer.style.maxHeight = null;
                                if (otherIcon) otherIcon.classList.remove("faq-icon-open");
                            }
                        });

                        if (isOpen) {
                            faq.classList.remove("faq-open");
                            answer.style.maxHeight = null;
                            icon.classList.remove("faq-icon-open");
                        } else {
                            faq.classList.add("faq-open");
                            answer.style.maxHeight = answer.scrollHeight + "px";
                            icon.classList.add("faq-icon-open");
                        }
                    }
                }, [
                    "Can I find roommates through Arix?",
                    i({ class: "fa-solid fa-chevron-down" })
                ]),

                div({ class: "faq-answer" },
                    "Yes. Arix is designed to help students find roommates based on more than just who needs someone to share rent with. The matching experience looks at things like cleanliness, bills, personal space, social habits and how you handle everyday situations, so you're more likely to find someone whose lifestyle actually works with yours."
                )
            ]),

            div({ class: "faq" }, [
                button({
                    class: "faq-question",
                    type: "button",
                    onClick: (e) => {
                        const faq = e.currentTarget.parentElement;
                        const answer = faq.querySelector(".faq-answer");
                        const icon = e.currentTarget.querySelector("i");
                        const isOpen = faq.classList.contains("faq-open");

                        document.querySelectorAll(".faq.faq-open").forEach(item => {
                            if (item !== faq) {
                                item.classList.remove("faq-open");

                                const otherAnswer = item.querySelector(".faq-answer");
                                const otherIcon = item.querySelector(".faq-question i");

                                if (otherAnswer) otherAnswer.style.maxHeight = null;
                                if (otherIcon) otherIcon.classList.remove("faq-icon-open");
                            }
                        });

                        if (isOpen) {
                            faq.classList.remove("faq-open");
                            answer.style.maxHeight = null;
                            icon.classList.remove("faq-icon-open");
                        } else {
                            faq.classList.add("faq-open");
                            answer.style.maxHeight = answer.scrollHeight + "px";
                            icon.classList.add("faq-icon-open");
                        }
                    }
                }, [
                    "How does payment and security work?",
                    i({ class: "fa-solid fa-chevron-down" })
                ]),

                div({ class: "faq-answer" },
                    "When Arix's protected payment system is available for a listing, your money is intended to stay secured until the agreed conditions for releasing it are met. The idea is simple: you shouldn't have to send your rent straight to someone and just hope everything works out. Arix is designed to add a layer between your money and the person receiving it."
                )
            ]),

            div({ class: "faq-note" }, [
                "Still unsure about something? ",
                "Reach out to the Arix team and we'll help you get the clarity you need."
            ])

        ])
    ])
]),
//Last section to footer - show the user a cta
div({ class: "last-section" }, [
    h1({class:'better-title'},'Ready to Find Your Lodge?'),
    p({class:'last-sub'},'Explore your options and find a place that fits your needs, budget and lifestyle.'),
    div({class:'last-cta'},[
        button({class:'last-cta-btn'},[
            'Find My Lodge',
            i({class:'fa-solid fa-arrow-right'})
        ]),
        button({class:'last-cta-btn2'},[
            'Find a Roommate',
            i({class:'fa-solid fa-arrow-right'})
        ])
    ]),
    p({class:'faq-note'},[
        i({class:'fa-solid fa-shield-halved'}),
        ' Search smarter. Choose with confidence.'
    ])
]),


//footer section
    footer([
    div({class:'footer-flex'},[
        div({class:'flex-card comp'},[
            h3('Arix'),
            p('Arix is a technology-driven student housing platform built to make off-campus accommodation around university communities safer, smarter, and easier to navigate.')
        ]),
        div({class:'flex-card'},[
            h3('NAVIGATION'),
            a({href:'#'},'Home'),
            a({href:'#'},'Find a Lodge'),
            a({href:'#'},'Find a Roommate'),
            a({href:'#'},'Become an Agent'),
            a({href:'#'},'About Us'),
            a({href:'#'},'Contact Us'),
        ]),
        div({class:'flex-card'},[
            h3('SUPPORT'),
            a({href:'#'},'Help Center'),
            a({href:'#'},'FAQ'),
            a({href:'#'},'Terms of Service'),
            a({href:'#'},'Privacy Policy')
        ]),
        div({class:'flex-card con'},[
            h3('CONNECT'),
            div({class:'conn'},[
            a({href:'#', class:'fa-brands fa-facebook'}),
            a({href:'#', class:'fa-brands fa-whatsapp'}),
            a({href:'#', class:'fa-brands fa-instagram'})
            ])
        ]),
    ]),
    div({class:'f-div'},[
    img({class:'footer-logo', src:'./images/from white.png', alt:'Aximon Logo'}),
    ]),
    div({class:'f-div2'},[
        p({class:'smtxt'},'© 2026 Arix. All rights reserved.'),
        p({class:'smtxt'},[
            'Arix is a product of ',
            a({href:'https://aximon.ng', target:'_blank'}, 'Aximon')
        ])
    ])
])
])  
