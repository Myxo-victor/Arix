 /**
  * @author Myxo victor
  * @description Arix student housing and property listings landing page
  */

const Agent = () => div([
    header([
       img({class:'logo', src:'./images/logo.svg', alt:'Arix Logo'}),

       nav([
        a({class:'link', href:'/#/'},[
            'Home'
        ]),
        a({class:'link', href:'/#/'},[
            'Our Locations'
        ]),
        a({class:'link', href:'/#/'},[
            'Roommate'
        ]),
        a({class:'link active', href:'/#/'},[
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
                a({href:'#/', class:''},'Home'),
            ]),
            li([
                a({href:'#/', class:''},'Location'),
            ]),
            li([
                a({href:'#/', class:''},'Roommate'),
            ]),
            li([
                a({href:'#/', class:'active'},'Become agent'),
            ]),
            li([
                a({href:'#/', class:''},'Contact Us'),
            ]),
        ])
    ]),
    
    //Hero section
     
    //Hero section
section({class:'hero'},[
    div({class:'container hero-grid'},[
        div({class:'hero-copy'},[
            h1([
                'Turn Your Properties Into ',
                span('Opportunities.')
            ]),

            p(
                'List your properties on Arix, reach students actively looking for accommodation, and build trust with a verified agent profile.'
            ),

            div({class:'actions'},[
                a({
                    class:'btn btn-primary',
                    href:'#apply'
                },[
                    'Become an Agent ',
                    i({class:'fa-solid fa-arrow-right'})
                ]),

                a({
                    class:'btn btn-light',
                    href:'#how'
                },[
                    'How It Works'
                ])
            ]),

            div({class:'trust-row'},[
                span([
                    i({class:'fa-solid fa-circle-check'}),
                    'Verified agents'
                ]),

                span([
                    i({class:'fa-solid fa-users'}),
                    'Student-focused'
                ]),

                span([
                    i({class:'fa-solid fa-shield-halved'}),
                    'Trust-first'
                ])
            ])
        ]),

        div({class:'hero-image'},[
            img({
                class:'hero-photo',
                src:'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85',
                alt:'Modern property interior'
            }),

            div({class:'agent-card'},[
                div({class:'agent-top'},[
                    img({
                        class:'avatar',
                        src:'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
                        alt:'Agent'
                    }),

                    div([
                        div(
                            {class:'agent-name'},
                            'Chinedu Properties'
                        ),

                        div(
                            {class:'agent-location'},
                            'Umudike · MOUAU'
                        )
                    ])
                ]),

                div({class:'verified'},[
                    i({class:'fa-solid fa-circle-check'}),
                    ' VERIFIED AGENT'
                ]),

                div({class:'agent-stat'},[
                    span('Active listings'),
                    strong('12')
                ])
            ])
        ])
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
