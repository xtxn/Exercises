function register() {
    const form = document.querySelector('form#register');
    const url = 'http://localhost:3030/users/register';

    form.addEventListener('submit', onRegister);

    async function onRegister(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        const email = data.email;
        const password = data.password;
        const rePass = data.rePass;

        if (password != rePass) {
            alert(`Please enter matching password and repeat`);
            return;
        };
        if (!email || !password || !rePass) {
            alert('Please fill all input fields');
            return;
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify({ email, password })
        };
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Cannot connect to server');
            };
            const userData = await response.json();

            sessionStorage.setItem('userData', JSON.stringify(userData));
            window.location = 'index.html'

        } catch (error) {
            alert('Cannot connect to server')
        };
    };

}

register(); 