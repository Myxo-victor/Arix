/**
 * @author Myxo Victor
 * @copyright Aximon 2026
 * @description This file handles the components of Arix logged in user saved
 * @version 1.0.0 
 * @date 22 Sept. 2026
 */

const Saved = () => div([
    div({class:'parent'},[
        nav([
            img({class:'logo', src:'./images/logo.png'}),
            div({class:'navi'},[
                p({class:'tab'},[
                    i({class:'fa-solid fa-home'}),
                    'Home'
                ]),
                p({class:'tab'},[
                    i({class:'fa-solid fa-user-group'}),
                    'Roommates'
                ]),
                p({class:'tab active'},[
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
                p({class:'page-title'},'Saved Lodges'),
               /* div({class:'icon-cta'},[
                    div({class:'search'},[
                        i({class:'fa-solid fa-search'})
                    ]),
                    div({class:'bell'},[
                        i({class:'fa-regular fa-bell'})
                    ])
                ])*/
            ]),
            //body - where things can appear
            div({class:'page-body'},[
                //things appear
                h3('Your Saved Lodges'),
                div({class:'s-lodges'},[
                    div({class:'saved-card'},[
                        img({class:'saved-img', src:'./images/room.jpg'}),
                        div({class:'desc'},[
                            p({class:'price'},'₦150,000/yr'),
                            p({class:'location'},[
                                i({class:'fa-solid fa-map-pin'}),
                                'Back of Stadium, Umudike MOUAU.'
                            ]),
                            p({class:'stamp'},'Saved')
                        ])
                    ]),
                    div({class:'saved-card'},[
                        img({class:'saved-img', src:'./images/property.jpg'}),
                        div({class:'desc'},[
                            p({class:'price'},'₦180,000/yr'),
                            p({class:'location'},[
                                i({class:'fa-solid fa-map-pin'}),
                                'Crowncut, Umudike MOUAU.'
                            ]),
                            p({class:'stamp'},'Saved')
                        ])
                    ])
                ])
            ])
        ]),
      ])
])

