/**
 * Animation file
 * @author Myxo Victor
 */

window.initializeArixAnimations = () => {
  manorbit.slides({
    IDs: ['spon-img1', 'spon-img2', 'spon-img3'],
    interval: 1000,
    dots: true
  });

  manorbit.slides({
    IDs: ['spon-img4', 'spon-img5', 'spon-img6'],
    interval: 1000,
    dots: true
  });

  manorbit.slides({
    IDs: ['spon-img7', 'spon-img8', 'spon-img9'],
    interval: 1000,
    dots: true
  });

  manorbit.slides({
    IDs: ['spon-img10', 'spon-img11', 'spon-img12'],
    interval: 1000,
    dots: true
  });

  manorbit.slides({
    IDs: ['spon-img13', 'spon-img14', 'spon-img15'],
    interval: 1000,
    dots: true
  });

  manorbit.slides({
    IDs: ['spon-img16', 'spon-img17', 'spon-img18'],
    interval: 1000,
    dots: true
  });

  manorbit.slides({
    IDs: ['spon-img19', 'spon-img20', 'spon-img21'],
    interval: 1000,
    dots: true
  });

  manorbit.slides({
    IDs: ['fn-img1', 'fn-img2', 'fn-img3'],
    interval: 1000,
    dots: true
  });

  manorbit.slides({
    IDs: ['fn-img4', 'fn-img5', 'fn-img6'],
    interval: 1000,
    dots: true
  });

  manorbit.slides({
    IDs: ['fn-img7', 'fn-img8', 'fn-img9'],
    interval: 1000,
    dots: true
  });

  manorbit.slides({
    IDs: ['fn-img10', 'fn-img11', 'fn-img12'],
    interval: 1000,
    dots: true
  });

  manorbit.slides({
    IDs: ['fn-img13', 'fn-img14', 'fn-img15'],
    interval: 1000,
    dots: true
  });

  Chex.animate('.first-layer', {
    slideFrom: 'left',
    duration: 1000,
    once: false
  });

  Chex.animate('.second-layer', {
    slideFrom: 'top',
    duration: 1000,
    once: false
  });

  Chex.animate('.last-layer', {
    slideFrom: 'right',
    duration: 1000,
    once: false
  });



/**
 * Chex Form Animation
 */

window.showPassword = (event) => {
  const form = event?.currentTarget?.closest('.form') || document;
  const shouldShow = Boolean(event?.currentTarget?.checked);
  form.querySelectorAll('input[data-password-field]').forEach(field => {
    field.type = shouldShow ? 'text' : 'password';
  });
};

  if (window.arixRegisterForm) {
    window.arixRegisterForm.destroy();
    window.arixRegisterForm = null;
  }

  const registerStepZero = document.getElementById('register-step-0');
  const registerStepOne = document.getElementById('register-step-1');
  const agentStepOne = document.getElementById('agent-register-step-1');
  const agentStepTwo = document.getElementById('agent-register-step-2');
  const agentStepThree = document.getElementById('agent-register-step-3');

  if (registerStepZero && registerStepOne && agentStepOne && agentStepTwo && agentStepThree && window.chex?.form) {
    const allRegisterSteps = [
      registerStepZero,
      registerStepOne,
      document.getElementById('register-step-2'),
      agentStepOne,
      agentStepTwo,
      agentStepThree
    ].filter(Boolean);

    const startRegisterForm = (stepIds) => {
      allRegisterSteps.forEach(step => {
        step.style.display = 'none';
        step.style.opacity = '0';
      });

      return window.chex.form.start({
        IDs: stepIds,
        effect: 'fall'
      });
    };

    window.arixRegisterForm = startRegisterForm([
      'register-step-0',
      'register-step-1',
      'register-step-2'
    ]);

    const cards = registerStepZero.querySelectorAll('.q-card');
    cards[0]?.addEventListener('click', () => window.arixRegisterForm?.next());
    cards[1]?.addEventListener('click', () => {
      window.arixRegisterForm?.destroy();
      window.arixRegisterForm = startRegisterForm([
        'register-step-0',
        'agent-register-step-1',
        'agent-register-step-2',
        'agent-register-step-3'
      ]);
      window.arixRegisterForm?.next();
    });
  }




};
