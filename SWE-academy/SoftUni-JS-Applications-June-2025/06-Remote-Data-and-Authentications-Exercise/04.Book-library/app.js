function bookLoader() {

    const btnLoad = document.getElementById('loadBooks');
    const form = document.querySelector('form');
    const table = document.querySelector('tbody');
    const btnSubmit = document.querySelector('form>button');
    const inputTitle = document.querySelector('input[name="title"]');
    const inputValue = document.querySelector('input[name="author"]');

    let formTitle = document.querySelector('form>h3');
    let currentID = null;

    const url = 'http://localhost:3030/jsonstore/collections/books';

    btnLoad.addEventListener('click', onLoad);
    form.addEventListener('submit', onSubmit);
    table.innerHTML = '';

    async function onLoad() {
        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Can't connect to server`);
            };
            let bookData = await response.json();

            table.innerHTML = '';
            Object.entries(bookData).forEach(item => {
                const [_id, book] = item;

                const tr = document.createElement('tr');
                tr.dataset.id = _id;
                tr.innerHTML =
                    `<td>${book.title}</td>
            <td>${book.author}</td>
            <td>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
            </td>`

                tr.querySelector('.edit').addEventListener('click', onEdit);
                tr.querySelector('.delete').addEventListener('click', onDelete);
                table.appendChild(tr);
            });
        } catch (error) {
            alert(error.message);
        }
    };

    async function onSubmit(event) {
        event.preventDefault();

        if (!inputTitle.value || !inputValue.value) {
            return;
        }

        const formData = new FormData(event.target);
        let method = '';
        let currentURL = '';

        if (btnSubmit.textContent === 'Submit') {
            method = 'POST';
            currentURL = url;
        } else {
            method = 'PUT'
            currentURL = `${url}/${currentID}`;
        }

        data = Object.fromEntries(formData.entries())

        const options = {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        };

        try {
            const response = await fetch(currentURL, options);
            if (!response.ok) {
                throw new Error;
            };
            btnSubmit.textContent = 'Submit';
            formTitle.textContent = 'FORM';
            currentID = null;

            await onLoad();

        } catch (error) {
            alert(error.message);
        };
        form.reset();
    };

    function onEdit(event) {

        const currentElement = event.target.parentElement.parentElement;
        let title = currentElement.children[0].textContent;
        let author = currentElement.children[1].textContent;
        currentID = currentElement.dataset.id;

        inputTitle.value = title;
        inputValue.value = author;
        formTitle.textContent = 'Edit FORM';
        btnSubmit.textContent = 'Save';

    };

    async function onDelete(event) {
        const currentElement = event.target.parentElement.parentElement
        const id = currentElement.dataset.id;
        const currentUrl = `${url}/${id}`;

        try {
            const response = await fetch(currentUrl, { method: "DELETE" });
            if (!response.ok) {
                throw new Error
            }
            await onLoad();
        } catch (error) {
            alert(error.message);
        };
    };

}

bookLoader();