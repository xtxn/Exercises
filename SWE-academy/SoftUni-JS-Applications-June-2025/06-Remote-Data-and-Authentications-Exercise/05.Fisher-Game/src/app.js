function app() {
    let userData = JSON.parse(sessionStorage.getItem('userData'));

    const url = 'http://localhost:3030/users/logout';

    const btnLogout = document.getElementById('logout')
    const btnUser = document.getElementById('user');
    const btnGuest = document.getElementById('guest');
    const userSpan = document.querySelector('.email>span');

    btnLogout.addEventListener('click', onLogout);

    updateNav();

    const option = {
        method: 'GET',
        headers: {
            'X-Authorization': userData.accessToken,
        },
    };

    async function onLogout() {
        const response = await fetch(url, option);

        sessionStorage.clear();
        userData = '';
        updateNav();
    };

    function updateNav() {
        if (userData) {
            btnUser.style.display = 'inline-block';
            btnGuest.style.display = 'none';
            userSpan.textContent = userData.email;
        } else {
            btnUser.style.display = 'none';
            btnGuest.style.display = 'inline-block';
            userSpan.textContent = 'guest'
        };
    };
}

app();