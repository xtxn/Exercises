function app() {
    let userData = JSON.parse(sessionStorage.getItem('userData'));

    const url = 'http://localhost:3030/users/logout';
    const urlCatches = ' http://localhost:3030/data/catches';

    const btnLogout = document.getElementById('logout')
    const btnUser = document.getElementById('user');
    const btnGuest = document.getElementById('guest');
    const userSpan = document.querySelector('.email>span');
    const btnLoad = document.querySelector('.load');
    const addForm = document.getElementById('addForm');
    const btnAdd = document.querySelector('.add');
    const catches = document.getElementById('catches');

    btnLogout.addEventListener('click', onLogout);
    btnLoad.addEventListener('click', onLoad);
    addForm.addEventListener('submit', onAdd)

    updateNav();

    async function onLogout() {

        const option = {
            method: 'GET',
            headers: {
                'X-Authorization': userData.accessToken,
            },
        };

        try {
            const response = await fetch(url, option);

            if (!response.ok) {
                throw new Error;
            }
            sessionStorage.clear();
            userData = '';
            updateNav();

        } catch (error) {
            alert(error);
        }
    };

    function updateNav() {
        catches.innerHTML = '';
        if (userData) {
            btnUser.style.display = 'inline-block';
            btnGuest.style.display = 'none';
            userSpan.textContent = userData.email;
            btnAdd.disabled = false;
        } else {
            btnUser.style.display = 'none';
            btnGuest.style.display = 'inline-block';
            userSpan.textContent = 'guest'
            btnAdd.disabled = true;
        };
    };

    const catchID = '';
    async function onLoad() {
        try {
            const response = await fetch(urlCatches);
            if (!response.ok) {
                throw new Error;
            };

            const data = await response.json();

            catches.innerHTML = '';

            data.forEach(el => {
                const div = document.createElement('div');
                div.classList.add('catch');
                div.innerHTML = createContent(el);
                if (userData?._id === el._ownerId) {
                    const inputs = div.querySelectorAll('input');
                    inputs.forEach(input => input.disabled = false);

                    const update = div.querySelector('.update');
                    const del = div.querySelector('.delete');
                    update.disabled = false;
                    del.disabled = false;
                    update.addEventListener('click', onUpdate);
                    del.addEventListener('click', onDelete);
                };
                catches.appendChild(div);
            });

        } catch (error) {
            alert(error.message);
        }
    }

    function createContent(data) {
        return `<label>Angler</label>
                <input type="text" class="angler" value="${data.angler}" disabled>
                <label>Weight</label>
                <input type="text" class="weight" value="${data.weight}" disabled>
                <label>Species</label>
                <input type="text" class="species" value="${data.species}" disabled>
                <label>Location</label>
                <input type="text" class="location" value="${data.location}" disabled>
                <label>Bait</label>
                <input type="text" class="bait" value="${data.bait}" disabled>
                <label>Capture Time</label>
                <input type="number" class="captureTime" value="${data.captureTime}" disabled>
                <button class="update" data-id="${data._id}" disabled>Update</button>
                <button class="delete" data-id="${data._id}" disabled>Delete</button>`
    }

    async function onUpdate(event) {
        event.preventDefault();

        const id = event.target.dataset.id;

        const div = event.target.parentElement;
        const [anglerRef, weightRef, speciesRef, locationRef, baitRef, captureTimeRef] = Array.from(div.querySelectorAll('input'));

        const data = {
            angler: anglerRef.value,
            weight: weightRef.value,
            species: speciesRef.value,
            location: locationRef.value,
            bait: baitRef.value,
            captureTime: captureTimeRef.value
        };

        const option = {
            method: 'PUT',
            headers: {
                'X-Authorization': userData.accessToken,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };

        try {
            const response = await fetch(`${urlCatches}/${id}`, option);
            if (!response.ok) {
                throw new Error;
            };
            await onLoad();

        } catch (error) {
            alert(error.message)
        }
    };

    async function onDelete(event) {
        const id = event.target.dataset.id;
        const option = {
            method: "DELETE",
            headers: { 'X-Authorization': userData.accessToken }
        }
        try {
            const response = await fetch(`${urlCatches}/${id}`, option);
            if (!response.ok) {
                throw new Error;
            }
            await onLoad();

        } catch (error) {
            alert(error.message);
        };
    };

    async function onAdd(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        if (!data.angler || !data.bait || !data.captureTime || !data.location || !data.species || !data.weight) {
            return;
        };

        const option = {
            method: 'POST',
            headers: {
                'X-Authorization': userData.accessToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        try {
            const response = await fetch(urlCatches, option);

            addForm.reset();
            await onLoad();

        } catch (error) {
            alert(error.message);
        };
    };
}

app();