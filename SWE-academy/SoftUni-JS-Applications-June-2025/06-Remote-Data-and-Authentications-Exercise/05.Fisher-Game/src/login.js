function login(params) {
    const btnNavLogin = document.getElementById('login');
    const form = document.querySelector('form#login');
    const inputEmail = document.querySelector('input[name="email"]');
    const inputPass = document.querySelector('input[name="password"]');
    const url = 'http://localhost:3030/users/login';

    form.addEventListener('submit', onLogin);

    async function onLogin(event) {
        event.preventDefault();

        if (!inputEmail.value || !inputPass.value) {
            return;
        };
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData.entries());

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        }
        try {
            let response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('This use doesn\'t exist');
            }
            const userData = await response.json();

            sessionStorage.setItem('userData', JSON.stringify(userData));
            window.location = 'index.html';
        } catch (error) {
            alert('This use doesn\'t exist');
        }
    };
};

login();