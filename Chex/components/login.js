/**
 * @author Myxo Victor
 * @description This is the login page component
 * @date 9th sept. 2026
 */

const Login = () => div({class:'page-body'},[
    div({class:'l-side'},[
        img({class:'login-logo',src:'./images/white-arix.svg'}),
        h2({class:'l-title'},'Beyond Ordinary')
    ]),
    div({class:'f-side'},[
        div({class:'form'},[
            h2({class:'fo-title'},'Sign In'),
            input({class:'input', type:'email', name:'email', id:'email', placeholder:'Email Address'}),
            input({class:'input', type:'password', name:'password', id:'password', placeholder:'Password', 'data-password-field':true}),
            div({class:'spf'},[
                div({style:'display:flex;align-items:center;gap:5px'},[
                    input({class:'ck', type:'checkbox', onchange: (event) => showPassword(event)}),
                    span(' Show Password')
                ]),
                a({class:'fg', href:'forget.html'},'Forgot Password?')
            ]),
            button({class:'login-btn'},'Sign In'),
            //line
            div({class:'line'},[
                p({style:'background:transparent'},'OR')
            ]),
            button({class:'siu'},'Create New Account')
        ])
    ])
])