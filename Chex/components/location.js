/**
  * @author Matthew 
  * @description Our locations page
  */

const Locations = () => div([
    header([
       img({class:'logo', src:'./images/logo.svg', alt:'Arix Logo'}),

       nav([
        a({class:'link', href:'/#/'},[
            'Home'
        ]),
        a({class:'link active', href:'/#/'},[
            'Our Locations'
        ]),
        a({class:'link', href:'/#/'},[
            'Roommate'
        ]),
        a({class:'link', href:'/#/'},[
            'Become Agent'
        ]),
        a({class:'link', href:'/#/'},[
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
    
    //Hero section and other parts can appear here like footer
  section({class:'location-hero'},[
    div({class:'location-hero-content'},[
        div({class:'hero-text'},[
            h1('Find Your Next Home Where Your Student Life Happens.'),
            p('Explore trusted student communities around your campus and discover housing closer to your school, your routine, and your life.'),
            div({class:'hero-btns'},[
                button({class:'btn btn-primary'},'Explore Locations'),
                button({class:'btn btn-secondary'},'Become an Agent')
        ]),
        ]),

        div({class:'side-hero'},[
            img({src:'images/mouau.jpg', alt:'Mouau Campus'}) ,
            img({src:'images/absu.jpg', alt:'absu Campus'}) ,
            img({src:'images/poly.jpg', alt:'Ogbennaya Onu Polytechnic Campus'}),
            div({class:'serving'},[
                span({class:'serving-label'},'ARIX LOCATIONS'),
                span({class:'serving-count'},'3 student communities')
            ])
        ])
    ]),br(),br(),br(),br(),br(),br(),br(),br(),br(),
    //communities  section
    section({class:'locations'},[
        div({class:'container'},[
            h2({class:'section-title'},'Communities We Currently Serve'),
            p({class:'section-sub'},'Focused student communities, carefully selected to make housing search easier, safer and more relevant.'),
            div({class:'location-grid'},[
                div({class:'location-card'},[
                    div({class:'location-image'},[
                        img({src:'images/mouau.jpg', alt:'MOUAU campus and student community'})
                    ]),
                    div({class:'location-content'},[
                        div({class:'badge'},'MOUAU'),
                        h2('Umudike'),
                        p('Student housing around the MOUAU community.'),
                        a({href:'#', class:'link-btn'},'Explore Umudike →')
                    ])
                ]),
                div({class:'location-card'},[
                    div({class:'location-image'},[
                        img({src:'images/absu.jpg', alt:'ABSU campus and student community'})
                    ]),
                    div({class:'location-content'},[
                        div({class:'badge'},'ABSU'),
                        h2('Uturu'),
                        p('Student housing around the ABSU community.'),
                        a({href:'#', class:'link-btn'},'Explore Uturu →')
                    ])
                ]),
                div({class:'location-card'},[
                    div({class:'location-image'},[
                        img({src:'images/poly.jpg', alt:'Ogbennaya Onu Polytechnic campus and student community'})
                    ]),
                    div({class:'location-content'},[
                        div({class:'badge'},'Ogbennaya Onu Polytechnic'),
                        h2('Aba'),
                        p('Student housing around the Ogbennaya Onu Polytechnic community.'),
                        a({href:'#', class:'link-btn'},'Explore Aba →')
                    ])
                ])
            ]),
            br(), br(), br(), br(), br(), br(), br(),
            div({class:'story-box'},[
                h2({class:'section-title'},'Your Campus Is More Than a Pin on a Map.'),
                p({class:'section-sub'},'Arix focuses on student communities — the places around campus where students actually search, move, study, and live.')
            ])
        ])
    ]),
    //add location section
    section({class:'add-location'},[
        div({class:'container'},[
            div({class:'add-box'},[
                h2({class:'section-title-add'},'Don’t See Your Campus Yet?'),
                p({class:'section-sub-add'},'Tell us where you are. If enough students are looking for housing in your area, it helps us know where Arix should go next.'),
                button({class:' btn-add'},'Add Your Campus')
            ])
        ])
    ]),
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
