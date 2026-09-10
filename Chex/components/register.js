/**
 * @author Myxo Victor
 * @description This is the login page component
 * @date 9th sept. 2026
 */

const Register = () => div({class:'page-body'},[
    div({class:'l-side'},[
        img({class:'login-logo',src:'./images/white-arix.svg'}),
        h2({class:'l-title'},'Beyond Ordinary')
    ]),
    div({class:'f-side'},[
        div({class:'form'},[
            h2({class:'fo-title'},'Sign Up'),
            //step 0
            div({class:'ms', id:'register-step-0'},[
               h2({class:'cc'},'How are you joining Arix?'),
               p({class:'cu'},'Select the experience that applies to you.'),
               div({class:'q-card'},[
                img({class:'q-icon', src:'./images/search.png'}),
                p({class:'q-title'},'Searching For A Place To Live?')
               ]),
               div({class:'q-card'},[
                img({class:'q-icon', src:'./images/assets.png'}),
                p({class:'q-title'},'Want to list properties as Agent?')
               ]),
            ]),
             //step 1
            div({class:'ms', id:'register-step-1'},[
               input({class:'input', type:'text', name:'fname', id:'fname', placeholder:'First Name', required:true}),
               input({class:'input', type:'text', name:'lname', id:'lname', placeholder:'Last Name', required:true}),
               input({class:'input', type:'tel', name:'mobile', id:'mobile', placeholder:'Mobile Number', required:true, pattern:'[0-9+() -]{7,}'}),
               div({style:'display:flex;flex-direction:column;gap:4px'},[
                label('Campus / Location Focus'),
             select({class:'select', name:'location', id:'location', required:true},[
                      option({value:''},'Select Location'),
                 option({value:'Umudike, MOUAU'},'Umudike, MOUAU'),
                 option({value:'Uturu, ABSU'},'Uturu, ABSU'),
                 option({value:'Aba, Ogbennaya Onu Polythenic'},'Aba, Ogbennaya Onu Polythenic'),
               ])
            ]),
               button({class:'login-btn', type:'button', 'data-chex':'next'},'Next')
           ]),
           //step 2
            div({class:'ms', id:'register-step-2'},[
               input({class:'input', type:'email', name:'semail', id:'semail', placeholder:'Email Address', required:true}),
               input({class:'input', type:'password', name:'spassword', id:'spassword', placeholder:'Password', 'data-password-field':true, required:true, minLength:8, oninput:(event) => {
                   const confirmation = document.getElementById('cpassword');
                   if (confirmation) {
                       confirmation.setCustomValidity(confirmation.value === event.currentTarget.value ? '' : 'Passwords do not match.');
                   }
               }}),
               input({class:'input', type:'password', name:'cpassword', id:'cpassword', placeholder:'Confirm Password', 'data-password-field':true, required:true, minLength:8, oninput:(event) => {
                   const password = document.getElementById('spassword');
                   event.currentTarget.setCustomValidity(event.currentTarget.value === password?.value ? '' : 'Passwords do not match.');
               }}),
               div({style:'display:flex;align-items:center;gap:5px'},[
                    input({class:'ck', type:'checkbox', onchange: (event) => showPassword(event)}),
                    span(' Show Password')
                ]),
               div({class:'for-cta'},[
               button({class:'back-btn', type:'button', 'data-chex':'back'},'Back'),
               button({class:'nex-btn', type:'button', 'data-chex':'submit'},'Finish')
               ])
           ]),

           // Agent registration steps
           div({class:'ms', id:'agent-register-step-1', style:'display:none'},[
               input({class:'input', type:'text', name:'agent_fname', id:'agent-fname', placeholder:'First Name', required:true}),
               input({class:'input', type:'text', name:'agent_lname', id:'agent-lname', placeholder:'Last Name', required:true}),
               input({class:'input', type:'tel', name:'agent_mobile', id:'agent-mobile', placeholder:'Mobile Number', required:true, pattern:'[0-9+() -]{7,}'}),
               button({class:'login-btn', type:'button', 'data-chex':'next'},'Next')
           ]),

           div({class:'ms', id:'agent-register-step-2', style:'display:none'},[
               div({style:'display:flex;flex-direction:column;gap:4px'},[
                   label('Preferred Campus / Location'),
                   select({class:'select', name:'agent_location', id:'agent-location', required:true},[
                       option({value:''},'Select Location'),
                       option({value:'Umudike, MOUAU'},'Umudike, MOUAU'),
                       option({value:'Uturu, ABSU'},'Uturu, ABSU'),
                       option({value:'Aba, Ogbennaya Onu Polythenic'},'Aba, Ogbennaya Onu Polythenic')
                   ])
               ]),
               input({class:'input', type:'text', name:'business_name', id:'business-name', placeholder:'Business Name', required:true}),
               div({class:'for-cta'},[
                   button({class:'back-btn', type:'button', 'data-chex':'back'},'Back'),
                   button({class:'nex-btn', type:'button', 'data-chex':'next'},'Next')
               ])
           ]),

           div({class:'ms', id:'agent-register-step-3', style:'display:none'},[
               input({class:'input', type:'email', name:'agent_email', id:'agent-email', placeholder:'Email Address', required:true}),
               input({class:'input', type:'password', name:'agent_password', id:'agent-password', placeholder:'Password', 'data-password-field':true, required:true, minLength:8, oninput:(event) => {
                   const confirmation = document.getElementById('agent-confirm-password');
                   if (confirmation) {
                       confirmation.setCustomValidity(confirmation.value === event.currentTarget.value ? '' : 'Passwords do not match.');
                   }
               }}),
               input({class:'input', type:'password', name:'agent_confirm_password', id:'agent-confirm-password', placeholder:'Confirm Password', 'data-password-field':true, required:true, minLength:8, oninput:(event) => {
                   const password = document.getElementById('agent-password');
                   event.currentTarget.setCustomValidity(event.currentTarget.value === password?.value ? '' : 'Passwords do not match.');
               }}),
               div({style:'display:flex;align-items:center;gap:5px'},[
                   input({class:'ck', type:'checkbox', onchange:(event) => showPassword(event)}),
                   span(' Show Password')
               ]),
               div({class:'for-cta'},[
                   button({class:'back-btn', type:'button', 'data-chex':'back'},'Back'),
                   button({class:'nex-btn', type:'button', 'data-chex':'submit'},'Finish')
               ])
           ]),

        ])
    ])
])