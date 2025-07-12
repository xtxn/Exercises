function attachEvents() {

    const btnSend = document.getElementById('submit');
    const btnRefresh = document.getElementById('refresh');
    const nameInput = document.querySelector('input[name="author"]');
    const contentInput = document.querySelector('input[name="content"]');
    const msgBoard = document.querySelector('textarea')

    const url = 'http://localhost:3030/jsonstore/messenger';

    btnSend.addEventListener('click', onSend);
    btnRefresh.addEventListener('click', onRefresh);
    onRefresh();

    async function onRefresh() {
        let message = '';
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error;
            }
            const data = await res.json();

            Object.values(data).forEach(line => {
                message += `${line.author}: ${line.content}\n`;
            });
            msgBoard.value = message.trim();
        } catch (error) {
            console.log(error.message);
        };
    };

    async function onSend() {
        const author = nameInput.value;
        const content = contentInput.value;
        if (!author || !content) {
            return;
        }

        const data = {
            author,
            content,
        }

        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data)
        };
        try {
            const res = await fetch(url, options);
            if (!res.ok) {
                throw new Error;
            };

            nameInput.value = '';
            contentInput.value = '';

            onRefresh();
        } catch (error) {
            console.log(error.message);

        }
    };
}

attachEvents();