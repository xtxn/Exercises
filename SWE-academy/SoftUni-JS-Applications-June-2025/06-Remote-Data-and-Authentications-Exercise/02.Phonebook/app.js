function attachEvents() {

    const btnLoad = document.getElementById('btnLoad');
    const btnCreate = document.getElementById('btnCreate');

    const inputPerson = document.getElementById('person');
    const inputPhone = document.getElementById('phone');

    const book = document.getElementById('phonebook');

    btnLoad.addEventListener('click', onLoad);
    btnCreate.addEventListener('click', onCreate);

    const url = 'http://localhost:3030/jsonstore/phonebook';

    async function onLoad() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error;
            };
            const phonebook = await response.json();
            book.replaceChildren();

            Object.values(phonebook).forEach(line => {
                const li = document.createElement('li');
                const btnDelete = document.createElement('button');

                btnDelete.textContent = 'Delete';
                btnDelete.addEventListener('click', onDelete);
                li.textContent = `${line.person}: ${line.phone}`;
                li.dataset.id = line._id;
                li.appendChild(btnDelete);
                book.appendChild(li);
            });
        } catch (error) {
            console.log(error.message);
        };
    };

    async function onCreate() {
        const person = inputPerson.value;
        const phone = inputPhone.value;

        if (!person || !phone) {
            return;
        };

        data = { person, phone, };

        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        };

        await fetch(url, options);

        inputPerson.value = '';
        inputPhone.value = '';
        onLoad()
    };

    async function onDelete(e) {
        const id = e.target.parentElement.dataset.id;
        await fetch(url + `/${id}`, { method: 'DELETE' });
        onLoad();
    };

}

attachEvents();