function validate() {

    let regexp = /[a-z]+@[a-z]+\.[a-z]+/gm;
    let emailInput = document.getElementById('email');

    emailInput.addEventListener('change', () => {
        if (regexp.test(emailInput.value) == false) {
            emailInput.className = 'error';
        } else {
            emailInput.className = '';
        }
    });
};