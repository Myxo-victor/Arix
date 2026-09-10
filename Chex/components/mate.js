 /**
  * @author Myxo victor
  * @description Arix student housing and property listings landing page
  */

const Roommate = () => div([
    header([
       img({class:'logo', src:'./images/logo.svg', alt:'Arix Logo'}),

       nav([
        a({class:'link', href:'/#/'},[
            'Home'
        ]),
        a({class:'link', href:'/#/'},[
            'Our Locations'
        ]),
        a({class:'link active', href:'/#/'},[
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
                a({href:'#/', class:''},'Home'),
            ]),
            li([
                a({href:'#/', class:''},'Location'),
            ]),
            li([
                a({href:'#/', class:'active'},'Roommate'),
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

        // ============================================================
        // HERO
        // ============================================================

        section({ class: "arix-rm-hero" }, [
            div({ class: "arix-rm-container arix-rm-hero-grid" }, [

                div({ class: "arix-rm-hero-copy" }, [
                    h1([
                        "Find Someone You Can ",
                        span({ class: "arix-text-gradient" }, ["Actually Live With."])
                    ]),

                    p({ class: "arix-rm-hero-description" }, [
                        "Not just someone looking for a room. ",
                        "Someone whose lifestyle, habits, and expectations make sense with yours."
                    ]),

                    div({ class: "arix-rm-hero-actions" }, [
                        a({
                            href: "#roommate-assessment",
                            class: "arix-btn arix-btn-primary"
                        }, [
                            "Find My Match",
                            i({ class: "fa-solid fa-arrow-right" })
                        ]),

                        a({
                            href: "#how-it-works",
                            class: "arix-btn arix-btn-secondary"
                        }, [
                            "How It Works"
                        ])
                    ]),

                    div({ class: "arix-rm-trust-line" }, [
                        div({ class: "arix-rm-trust-item" }, [
                            span({ class: "arix-rm-trust-icon" }, [
                                i({ class: "fa-solid fa-shield" })
                            ]),
                            Chex.span(["Lifestyle-based matching"])
                        ]),

                        div({ class: "arix-rm-trust-item" }, [
                            span({ class: "arix-rm-trust-icon" }, [
                                i({ class: "fa-solid fa-user-check" })
                            ]),
                            span(["Built for students"])
                        ])
                    ])
                ]),

                div({ class: "arix-rm-hero-visual" }, [

                    div({ class: "arix-rm-aura arix-rm-aura-blue" }),
                    div({ class: "arix-rm-aura arix-rm-aura-teal" }),

                    div({ class: "arix-profile-card arix-profile-main" }, [

                        div({ class: "arix-profile-top" }, [
                            div({ class: "arix-avatar arix-avatar-blue" }, [
                                span(["C"])
                            ]),

                            div({ class: "arix-profile-info" }, [
                                h3(["Chizzy"]),
                                p(["300 Level • MOUAU"])
                            ]),

                            span({ class: "arix-verified-badge" }, [
                                i({ class: "fa-solid fa-circle-check" }),
                                " Verified"
                            ])
                        ]),

                        div({ class: "arix-compatibility" }, [
                            div({ class: "arix-compatibility-score" }, [
                                span(["94%"]),
                                Chex.small(["compatible"])
                            ]),

                            div({ class: "arix-compatibility-copy" }, [
                                Chex.strong(["Strong lifestyle fit"]),
                                p(["Based on your answers and everyday living preferences."])
                            ])
                        ]),

                        div({ class: "arix-profile-factors" }, [

                            div({ class: "arix-factor" }, [
                                span({ class: "arix-factor-icon teal" }, [
                                    i({ class: "fa-solid fa-broom" })
                                ]),
                                div([
                                    span(["Cleanliness"]),
                                    Chex.strong(["Very compatible"])
                                ])
                            ]),

                            div({ class: "arix-factor" }, [
                                span({ class: "arix-factor-icon blue" }, [
                                    i({ class: "fa-solid fa-moon" })
                                ]),
                                div([
                                    span(["Sleep habits"]),
                                    Chex.strong(["Compatible"])
                                ])
                            ]),

                            div({ class: "arix-factor" }, [
                                span({ class: "arix-factor-icon amber" }, [
                                    i({ class: "fa-solid fa-volume-low" })
                                ]),
                                div([
                                    span(["Noise level"]),
                                    Chex.strong(["Very compatible"])
                                ])
                            ])
                        ])
                    ]),

                    div({ class: "arix-floating-match-card" }, [
                        span({ class: "arix-floating-icon" }, [
                            i({ class: "fa-solid fa-handshake" })
                        ]),
                        div([
                            Chex.strong(["Lifestyle match"]),
                            span(["You both value quiet evenings"])
                        ])
                    ])
                ])
            ])
        ]),


        // ============================================================
        // PROBLEM
        // ============================================================

        section({ class: "arix-rm-section arix-rm-problem" }, [
            div({ class: "arix-rm-container" }, [

                div({ class: "arix-rm-section-heading centered" }, [
                    h2(["Sharing a Room Is Easy. ", span(["Living Together Is Different."])]),
                    p([
                        "Two people can need the same kind of room, have the same budget, ",
                        "and still be completely wrong for each other."
                    ])
                ]),

                div({ class: "arix-rm-problem-grid" }, [

                    div({ class: "arix-rm-problem-card" }, [
                        span({ class: "arix-problem-number" }, ["01"]),
                        span({ class: "arix-problem-icon" }, [
                            i({ class: "fa-solid fa-broom" })
                        ]),
                        h3(["Cleanliness"]),
                        p([
                            "How tidy do you expect your shared space to be?"
                        ])
                    ]),

                    div({ class: "arix-rm-problem-card" }, [
                        span({ class: "arix-problem-number" }, ["02"]),
                        span({ class: "arix-problem-icon" }, [
                            i({ class: "fa-solid fa-moon" })
                        ]),
                        h3(["Sleep & Noise"]),
                        p([
                            "Are you an early sleeper, night owl, or somewhere in between?"
                        ])
                    ]),

                    div({ class: "arix-rm-problem-card" }, [
                        span({ class: "arix-problem-number" }, ["03"]),
                        span({ class: "arix-problem-icon" }, [
                            i({ class: "fa-solid fa-users" })
                        ]),
                        h3(["Social Life"]),
                        p([
                            "How often do you like having people around your space?"
                        ])
                    ]),

                    div({ class: "arix-rm-problem-card" }, [
                        span({ class: "arix-problem-number" }, ["04"]),
                        span({ class: "arix-problem-icon" }, [
                            i({ class: "fa-solid fa-wallet" })
                        ]),
                        h3(["Bills & Money"]),
                        p([
                            "How do you approach shared expenses and responsibilities?"
                        ])
                    ])
                ])
            ])
        ]),


        // ============================================================
        // ASSESSMENT
        // ============================================================

        section({
            class: "arix-rm-section arix-rm-assessment-section",
            id: "roommate-assessment"
        }, [
            div({ class: "arix-rm-container arix-rm-assessment-grid" }, [

                div({ class: "arix-rm-assessment-copy" }, [
                    h2([
                        "We Match ",
                        span(["Lifestyles,"]),
                        " Not Just Empty Spaces."
                    ]),

                    p([
                        "Before Arix recommends someone, we want to understand how you actually live."
                    ]),

                    p([
                        "Your assessment looks at the everyday things that can make or break a shared living arrangement."
                    ]),

                    ul({ class: "arix-rm-check-list" }, [
                        li([
                            span({ class: "arix-check" }, [
                                i({ class: "fa-solid fa-check" })
                            ]),
                            "Cleanliness and shared responsibilities"
                        ]),

                        li([
                            span({ class: "arix-check" }, [
                                i({ class: "fa-solid fa-check" })
                            ]),
                            "Sleep schedules and noise preferences"
                        ]),

                        li([
                            span({ class: "arix-check" }, [
                                i({ class: "fa-solid fa-check" })
                            ]),
                            "Personal space and boundaries"
                        ]),

                        li([
                            span({ class: "arix-check" }, [
                                i({ class: "fa-solid fa-check" })
                            ]),
                            "Guests and social habits"
                        ]),

                        li([
                            span({ class: "arix-check" }, [
                                i({ class: "fa-solid fa-check" })
                            ]),
                            "Bills, communication and expectations"
                        ])
                    ])
                ]),

                div({ class: "arix-assessment-preview" }, [

                    div({ class: "arix-assessment-header" }, [
                        div([
                            span(["Roommate Assessment"]),
                            Chex.strong(["Question 7 of 12"])
                        ]),

                        div({ class: "arix-progress-track" }, [
                            div({ class: "arix-progress-fill" })
                        ])
                    ]),

                    div({ class: "arix-assessment-question" }, [
                        span({ class: "arix-question-label" }, ["YOUR LIVING STYLE"]),

                        h3([
                            "How do you usually feel about having friends over?"
                        ])
                    ]),

                    div({ class: "arix-assessment-options" }, [

                        div({ class: "arix-assessment-option selected" }, [
                            span({ class: "arix-radio active" }),
                            div([
                                strong(["I enjoy having people around"]),
                                span(["As long as everyone respects the space"])
                            ])
                        ]),

                        div({ class: "arix-assessment-option" }, [
                            span({ class: "arix-radio" }),
                            div([
                                strong(["Occasionally is fine"]),
                                span(["I prefer a quieter living environment"])
                            ])
                        ]),

                        div({ class: "arix-assessment-option" }, [
                            span({ class: "arix-radio" }),
                            div([
                                strong(["I prefer very little traffic"]),
                                span(["Home is mostly my private space"])
                            ])
                        ])
                    ]),

                    div({ class: "arix-assessment-footer" }, [
                        span(["Your answers stay focused on compatibility."]),
                        span([
                            i({ class: "fa-solid fa-arrow-right" })
                        ])
                    ])
                ])
            ])
        ]),


        // ============================================================
        // COMPATIBILITY
        // ============================================================

        section({ class: "arix-rm-section arix-rm-compatibility" }, [
            div({ class: "arix-rm-container" }, [

                div({ class: "arix-rm-section-heading centered" }, [
                    h2(["See What You Have ", span(["In Common."])]),
                    p([
                        "Your compatibility result gives you a clearer picture of where your lifestyles align."
                    ])
                ]),

                div({ class: "arix-comparison-card" }, [

                    div({ class: "arix-comparison-person" }, [
                        div({ class: "arix-avatar arix-avatar-blue" }, ["Y"]),

                        h3(["You"]),
                        span(["Your lifestyle"])
                    ]),

                    div({ class: "arix-comparison-score" }, [
                        div({ class: "arix-score-circle" }, [
                            strong(["94%"]),
                            span(["FIT"])
                        ]),

                        span({ class: "arix-score-label" }, [
                            "Strong compatibility"
                        ])
                    ]),

                    div({ class: "arix-comparison-person" }, [
                        div({ class: "arix-avatar arix-avatar-teal" }, ["C"]),

                        h3(["Chizzy"]),
                        span(["Potential roommate"])
                    ])
                ]),

                div({ class: "arix-match-details" }, [

                    div({ class: "arix-match-detail" }, [
                        span(["Cleanliness"]),
                        div({ class: "arix-match-bar" }, [
                            div({ style: "width: 94%" })
                        ]),
                        strong(["94%"])
                    ]),

                    div({ class: "arix-match-detail" }, [
                        span(["Noise"]),
                        div({ class: "arix-match-bar" }, [
                            div({ style: "width: 88%" })
                        ]),
                        strong(["88%"])
                    ]),

                    div({ class: "arix-match-detail" }, [
                        span(["Personal Space"]),
                        div({ class: "arix-match-bar" }, [
                            div({ style: "width: 96%" })
                        ]),
                        strong(["96%"])
                    ]),

                    div({ class: "arix-match-detail" }, [
                        span(["Social Habits"]),
                        div({ class: "arix-match-bar" }, [
                            div({ style: "width: 82%" })
                        ]),
                        strong(["82%"])
                    ])
                ])
            ])
        ]),


        // ============================================================
        // HOUSING CONNECTION
        // ============================================================

        section({ class: "arix-rm-section arix-rm-housing" }, [
            div({ class: "arix-rm-container arix-rm-housing-grid" }, [

                div({ class: "arix-rm-housing-copy" }, [
                    span({ class: "arix-section-label" }, [
                        "ROOMMATE + HOUSING"
                    ]),

                    h2([
                        "Find Someone Who Fits ",
                        span(["Your Housing Plan."])
                    ]),

                    p([
                        "Sometimes the right roommate doesn't just make living together easier.",
                        " They can make the right home possible."
                    ]),

                    p([
                        "If you've found a place that works for you but the cost makes more sense shared,",
                        " Arix can help you discover students looking for a similar arrangement."
                    ])
                ]),

                div({ class: "arix-housing-match-card" }, [

                    div({ class: "arix-housing-match-header" }, [
                        div([
                            span({ class: "arix-housing-label" }, ["SHARED HOUSING"]),
                            h3(["2-Bedroom Flat"])
                        ]),

                        span({ class: "arix-housing-price" }, [
                            "₦180k",
                            small(["/person"])
                        ])
                    ]),

                    div({ class: "arix-housing-location" }, [
                        i({ class: "fa-solid fa-location-dot" }),
                        span(["Umudike • 8 mins to MOUAU"])
                    ]),

                    div({ class: "arix-housing-divider" }),

                    div({ class: "arix-housing-roommate" }, [
                        div({ class: "arix-avatar arix-avatar-orange" }, ["C"]),

                        div([
                            strong(["Chizzy"]),
                            span(["300 Level • MOUAU"]),
                            span([
                                i({ class: "fa-solid fa-circle-check" }),
                                " Verified student"
                            ])
                        ]),

                        span({ class: "arix-housing-fit" }, [
                            "94% fit"
                        ])
                    ])
                ])
            ])
        ]),


        // ============================================================
        // SAFETY
        // ============================================================

        section({ class: "arix-rm-section arix-rm-safety" }, [
            div({ class: "arix-rm-container" }, [

                div({ class: "arix-safety-box" }, [

                    div({ class: "arix-safety-icon" }, [
                        i({ class: "fa-solid fa-shield-halved" })
                    ]),

                    div({ class: "arix-safety-copy" }, [
                        h2([
                            "Compatibility Comes First. ",
                            span(["Trust Comes With It."])
                        ]),

                        p([
                            "Finding someone compatible should never mean compromising your safety or privacy."
                        ])
                    ]),

                    div({ class: "arix-safety-points" }, [

                        div([
                            i({ class: "fa-solid fa-user-check" }),
                            span(["Verified student profiles"])
                        ]),

                        div([
                            i({ class: "fa-solid fa-lock" }),
                            span(["Privacy-conscious profiles"])
                        ]),

                        div([
                            i({ class: "fa-solid fa-flag" }),
                            span(["Report and block controls"])
                        ])
                    ])
                ])
            ])
        ]),


        // ============================================================
        // HOW IT WORKS
        // ============================================================

        section({
            class: "arix-rm-section arix-rm-how",
            id: "how-it-works"
        }, [
            div({ class: "arix-rm-container" }, [

                div({ class: "arix-rm-section-heading centered" }, [
                    h2([
                        "From “I Need a Roommate” ",
                        span(["to “We Might Actually Work.”"])
                    ]),

                    p([
                        "Arix recommends. You decide."
                    ])
                ]),

                div({ class: "arix-how-grid" }, [

                    div({ class: "arix-how-step" }, [
                        span({ class: "arix-how-number" }, ["01"]),
                        span({ class: "arix-how-icon" }, [
                            i({ class: "fa-solid fa-sliders" })
                        ]),
                        h3(["Tell Us How You Live"]),
                        p([
                            "Answer questions about your habits, preferences and expectations."
                        ])
                    ]),

                    div({ class: "arix-how-step" }, [
                        span({ class: "arix-how-number" }, ["02"]),
                        span({ class: "arix-how-icon" }, [
                            i({ class: "fa-solid fa-user-gear" })
                        ]),
                        h3(["Build Your Profile"]),
                        p([
                            "Your answers become a lifestyle profile designed around compatibility."
                        ])
                    ]),

                    div({ class: "arix-how-step" }, [
                        span({ class: "arix-how-number" }, ["03"]),
                        span({ class: "arix-how-icon" }, [
                            i({ class: "fa-solid fa-users-viewfinder" })
                        ]),
                        h3(["Discover Compatible Students"]),
                        p([
                            "See students whose lifestyles may work well with yours."
                        ])
                    ]),

                    div({ class: "arix-how-step" }, [
                        span({ class: "arix-how-number" }, ["04"]),
                        span({ class: "arix-how-icon" }, [
                            i({ class: "fa-solid fa-comments" })
                        ]),
                        h3(["Decide for Yourself"]),
                        p([
                            "Arix gives you insight. You decide whether you want to connect."
                        ])
                    ])
                ])
            ])
        ]),


        // ============================================================
        // EMOTIONAL STATEMENT
        // ============================================================

        section({ class: "arix-rm-statement" }, [
            div({ class: "arix-rm-container" }, [

                div({ class: "arix-statement-inner" }, [
                    span({ class: "arix-statement-mark" }, [
                        i({ class: "fa-solid fa-quote-left" })
                    ]),

                    h2([
                        "Because “We Both Need a Room” ",
                        span(["Isn't Enough."])
                    ]),

                    p([
                        "You still have to live together after the rent is paid."
                    ]),

                    div({ class: "arix-statement-tags" }, [
                        span(["Cleanliness"]),
                        span(["Noise"]),
                        span(["Sleep"]),
                        span(["Guests"]),
                        span(["Bills"]),
                        span(["Personal Space"]),
                        span(["Communication"])
                    ])
                ])
            ])
        ]),


        // ============================================================
        // TESTIMONIAL / SOCIAL PROOF
        // ============================================================

        section({ class: "arix-rm-section arix-rm-testimonial" }, [
            div({ class: "arix-rm-container" }, [

                div({ class: "arix-testimonial-card" }, [

                    div({ class: "arix-testimonial-avatar arix-avatar-blue" }, [
                        "E"
                    ]),

                    div({ class: "arix-testimonial-content" }, [
                        p([
                            "“I didn't want to just find someone who needed the same room.",
                            " I wanted someone whose habits wouldn't make living together stressful.”"
                        ]),

                        div({ class: "arix-testimonial-author" }, [
                            strong(["Emmanuel"]),
                            span(["Student • MOUAU"])
                        ])
                    ]),

                    span({ class: "arix-testimonial-icon" }, [
                        i({ class: "fa-solid fa-quote-right" })
                    ])
                ])
            ])
        ]),


        // ============================================================
        // FAQ
        // ============================================================

        section({ class: "arix-rm-section arix-rm-faq" }, [
            div({ class: "arix-rm-container arix-rm-faq-grid" }, [

                div({ class: "arix-rm-faq-intro" }, [
                    h2([
                        "Questions About ",
                        span(["Roommate Matching?"])
                    ]),

                    p([
                        "Here's what you should know before finding your potential roommate."
                    ])
                ]),

                div({ class: "arix-faq-list" }, [

                    div({ class: "arix-faq-item active" }, [
                        button({ class: "arix-faq-question" }, [
                            span(["How does Arix match roommates?"]),
                            i({ class: "fa-solid fa-chevron-down" })
                        ]),

                        div({ class: "arix-faq-answer" }, [
                            p([
                                "Arix looks at your lifestyle and living preferences,",
                                " including cleanliness, bills, personal space, social habits,",
                                " sleep, noise and other everyday situations."
                            ])
                        ])
                    ]),

                    div({ class: "arix-faq-item" }, [
                        button({ class: "arix-faq-question" }, [
                            span(["Do I have to accept a suggested roommate?"]),
                            i({ class: "fa-solid fa-chevron-down" })
                        ]),

                        div({ class: "arix-faq-answer" }, [
                            p([
                                "No. Arix recommends potential matches, but you always decide",
                                " whether you want to connect with someone."
                            ])
                        ])
                    ]),

                    div({ class: "arix-faq-item" }, [
                        button({ class: "arix-faq-question" }, [
                            span(["What does the assessment ask about?"]),
                            i({ class: "fa-solid fa-chevron-down" })
                        ]),

                        div({ class: "arix-faq-answer" }, [
                            p([
                                "The assessment focuses on everyday living preferences such as",
                                " cleanliness, sleep, noise, social habits, personal space, guests,",
                                " communication and shared responsibilities."
                            ])
                        ])
                    ]),

                    div({ class: "arix-faq-item" }, [
                        button({ class: "arix-faq-question" }, [
                            span(["Can I find a roommate from my school?"]),
                            i({ class: "fa-solid fa-chevron-down" })
                        ]),

                        div({ class: "arix-faq-answer" }, [
                            p([
                                "Yes. Your school and preferred housing location can help narrow",
                                " your search to students looking around the same community."
                            ])
                        ])
                    ])
                ])
            ])
        ]),


        // ============================================================
        // FINAL CTA
        // ============================================================

        section({ class: "arix-rm-final-cta" }, [
            div({ class: "arix-rm-container" }, [

                div({ class: "arix-final-cta-inner" }, [

                    div({ class: "arix-final-cta-glow" }),

                    h2([
                        "Your Next Roommate Should Fit ",
                        span(["More Than Your Budget."])
                    ]),

                    p([
                        "Tell Arix how you live. We'll help you discover students",
                        " whose lifestyles may fit yours too."
                    ]),

                    a({
                        href: "#roommate-assessment",
                        class: "arix-btn arix-btn-light"
                    }, [
                        "Find My Match",
                        i({ class: "fa-solid fa-arrow-right" })
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







document.addEventListener("click", (event) => {
    const question = event.target.closest(".arix-faq-question");

    if (!question) return;

    const item = question.closest(".arix-faq-item");

    if (!item) return;

    const isOpen = item.classList.contains("active");

    // Close all FAQs
    document.querySelectorAll(".arix-faq-item.active").forEach((faq) => {
        faq.classList.remove("active");
    });

    // Open the clicked FAQ if it wasn't already open
    if (!isOpen) {
        item.classList.add("active");
    }
});