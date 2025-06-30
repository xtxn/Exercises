async function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const list = document.getElementById('commits');

    let url = `https://api.github.com/repos/${username}/${repo}/commits`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            const error = await response.json();
            throw error;
        }
        const data = await response.json();

        list.replaceChildren();

        data.forEach(el => {
            const li = document.createElement('li');
            li.textContent = `${el.commit.author.name}: ${el.commit.message}`;
            list.appendChild(li);
        });

    }
    catch (error) {
        list.replaceChildren([`Error: ${error.status} (Not Found)`])
    };
}
