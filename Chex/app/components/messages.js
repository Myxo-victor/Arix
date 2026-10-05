/**
 * @author Myxo Victor
 * @copyright Aximon 2026
 * @description This file handles the components of Arix logged in user home page
 * @version 1.0.0 
 * @date 22 Sept. 2026
 */

const Messages = () => div({ref: initializeHomeCarousels, onUnmount: cleanupHomeCarousels}, [
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
                p({class:'tab'},[
                    i({class:'fa-regular fa-bookmark'}),
                    'Saved'
                ]),
                p({class:'tab active'},[
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
                    p({class:'sm-txt'},'Student')
                ])
            ])
        ]),
        main([
            div({class:'top'},[
                //show the persion the user is chatting with here
                //p({class:'page-title'},'Messages'),
                div({class:'profile-flex'},[
                    img({class:'profile', src:'./images/arix-avatar.svg'}),
                    div({class:'info'},[
                        p({class:'chat-name'},[
                            'Easy Homes',
                            //if agent/user is verified
                            img({class:'mark', src:'./images/badge.png'})
                        ]),
                        div({class:'online-prop'},[
                            div({class:'dot'},[]),
                            p({class:'activity'},'Online')
                        ])
                    ])
                ])
            ]),
            //body - where things can appear
            div({class:'page-divider'},[
                div({class:'msg-place'},[
                   //permanent and default info
                   div({class:'p-def'},[
                    div({class:'k-txt'},[
                        i({class:'fa-solid fa-lock'}),
                        'Phone numbers unlock automatically after a tour is booked with this agent.'
                    ]),
                    button({class:'boka'},'Book tour')
                   ]),
                   //messages appear here for only the client not agents (for student account only)
                   //for f1 msg preview onclick action should be for both the div and the button
                   //this preview comes when the student clicks the message Agent button the listing card it comes with this preview message
                   //so that agent can know the actual lodge the student needs
                   div({class:'f1-msg-preview'},[
                       div({class:'msg-preview'},[
                         img({class:'preview-img', src:'./images/room.jpg', alt:'lodge image'}),
                         div({class:'preview-msg'},[
                            p({class:'pv-title'},'You are asking about'),
                            p({class:'pv-main'},'Self Contain, Umudike'),
                            p({class:'pv-address'},'Back of Admin'),
                            p({class:'pv-price'},'150,000 / year')
                         ]),
                         button({class:'go-btn'},[
                            i({class:'fa-solid fa-chevron-right'})
                         ])
                       ]),
                       //senders message which comes together with the preview message
                       div({class:'sender-msg'},[
                        p('Please is this lodge still available? I am interested in booking a tour for it.'),
                       ]),
                       p({class:'chat-time'},'9:22 AM')
                   ]),
                   //Receivers message appears here
                   div({class:'receiver-msg-holder'},[
                     div({class:'receiver-msg'},[
                        p('Yeah it\'s still available')
                     ]),
                     p({class:'chat-time'},'9:30pm')
                   ]),

                   //where to type your message
                   div({class:'ty-msg'},[
                    //increase height of textarea when user clicks enter key / also do same for mobile
                    textarea({placeholder:'Type a message...', id:'msg-send'}),
                    //keep this button gray and disabled unless the user starts typing
                    //class hints
                    //when disabled use: not-active
                    //when typing active use: typing-active
                    button({class:'send-btn not-active', disabled:true},[
                        i({class:'fa-solid fa-paper-plane'})
                    ])
                   ])
                ]),
                div({class:'chats'},[

                ])
            ])
        ]),
      ])
])