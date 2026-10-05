/**
 * @author Myxo Victor
 * @copyright Aximon 2026
 * @description This file handles the Dashboard UI for Arix 
 * @date 19 Sept. 2026
 */

const app = document.getElementById('app');
const {div, h1, h2,h4, p, i, header, nav, section, img, textarea, input, select, option, button, br} = Chex;

const Explanation = () => div({id:'onboarding-flow', ref: initializeOnboardingFlow, onUnmount: cleanupOnboardingFlow},[
    div({class:'emulator'},[
        p({class:'skp'},'Skip'),
        img({class:'banner', src:'./images/bn1.png', alt:'A student browsing through his phone searching for available lodges on Arix'}),
        div({class:'bti'},[
            h2({class:'btitle'},'Find lodges near you')
        ]),
        p({class:'bsub'},'Browse verified rooms and self-contains around Umuahia and Umudike for students like you'),
        button({class:'cnt', 'data-flow-next': true},'Continue')
        
    ]),
    div({class:'emulator'},[
        p({class:'skp'},'Skip'),
        img({class:'banner', src:'./images/bn2.png', alt:'A student browsing through his phone searching for available lodges on Arix'}),
        div({class:'bti'},[
            h2({class:'btitle'},'Book a tour before you pay')
        ]),
        p({class:'bsub'},'Take a Virtual or Physical tour first - you\'ll never be asked to pay rent before seeing the real place.'),
        button({class:'cnt', 'data-flow-next': true},'Continue')
        
    ]),
    div({class:'emulator'},[
        p({class:'skp'},'Skip'),
        img({class:'banner', src:'./images/bn3.png', alt:'A student browsing through his phone searching for available lodges on Arix'}),
        div({class:'bti'},[
            h2({class:'btitle'},'Your rent, held safely')
        ]),
        p({class:'bsub'},'Payments go into secure escrow and are only released to the agent once you confirm move-in'),
        button({class:'cnt', 'data-flow-next': true},'Continue')
    ]),
    div({class:'emulator'},[
        p({class:'skp'},'Skip'),
        img({class:'banner', src:'./images/bn4.png', alt:'A student browsing through his phone searching for available lodges on Arix'}),
        div({class:'bti'},[
            h2({class:'btitle'},'Split costs with roommate')
        ]),
        p({class:'bsub'},'Post your room or browse others looking to share rent, then chat right inside the app'),
        button({class:'cnt', id:'get-started'},'Get Started')
    ]),


])



















let onboardingFlow = null;
let onboardingFlowMountQueued = false;
let onboardingSkipHandler = null;

function initializeOnboardingFlow(container) {
    // Chex invokes refs before creating child nodes, so wait until the
    // current render finishes before DeckFlow searches for `.emulator` cards.
    if (onboardingFlowMountQueued) return;
    onboardingFlowMountQueued = true;

    queueMicrotask(function () {
        onboardingFlowMountQueued = false;
        if (!container.isConnected) return;
        if (onboardingFlow) onboardingFlow.destroy();

        onboardingFlow = new DeckFlow({
            container: container,
            cardSelector: '.emulator',
            nextButton: '[data-flow-next]',
            finishButton: '#get-started',
            pagination: true,
            onFinish: function () {
                localStorage.setItem('onboarded', 'true');
                router.navigate('/home');
            }
        });

        if (onboardingSkipHandler) {
            container.removeEventListener('click', onboardingSkipHandler);
        }
        onboardingSkipHandler = function (event) {
            if (!event.target.closest('.skp')) return;
            localStorage.setItem('onboarded', 'true');
            router.navigate('/home');
        };
        container.addEventListener('click', onboardingSkipHandler);
    });
}

function cleanupOnboardingFlow(container) {
    if (onboardingSkipHandler) {
        container.removeEventListener('click', onboardingSkipHandler);
        onboardingSkipHandler = null;
    }
    if (onboardingFlow) {
        onboardingFlow.destroy();
        onboardingFlow = null;
    }
}
