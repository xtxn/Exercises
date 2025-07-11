function attachEvents() {
    const urlPosts = 'http://localhost:3030/jsonstore/blog/posts';
    const urlComments = 'http://localhost:3030/jsonstore/blog/comments';
    const postOptions = document.getElementById('posts');
    const postBody = document.getElementById('post-body');
    const postTitle = document.getElementById('post-title');
    const postComments = document.getElementById('post-comments');

    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const btnViewPosts = document.getElementById('btnViewPost');

    btnLoadPosts.addEventListener('click', onLoad);
    btnViewPosts.addEventListener('click', onView)

    async function onLoad(e) {
        const res = await fetch(urlPosts);
        const postData = await res.json();

        for (const [key, value] of Object.entries(postData)) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = value.title;
            postOptions.appendChild(option);
        };
    };

    async function onView() {
        if (!postOptions.value) {
            return;
        };

        const selectedID = postOptions.value;
        const res = await fetch(urlPosts);
        const postData = await res.json();
        const res1 = await fetch(urlComments);
        const comments = await res1.json();

        postTitle.textContent = postData[selectedID].title;
        postBody.textContent = postData[selectedID].body;

        postComments.replaceChildren();
        for (const [key, value] of Object.entries(comments)) {
            if (selectedID === value.postId) {
                createComment(selectedID, value.text);
            };
        };

        function createComment(id, content) {
            const li = document.createElement('li');
            li.id = id;
            li.textContent = content;
            postComments.appendChild(li);
        };
    };
}
attachEvents();