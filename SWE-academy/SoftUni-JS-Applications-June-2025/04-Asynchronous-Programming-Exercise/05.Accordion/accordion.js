async function solution() {

    const main = document.getElementById('main');
    const urlTitles = 'http://localhost:3030/jsonstore/advanced/articles/list'; //array of objects
    const urlDetails = 'http://localhost:3030/jsonstore/advanced/articles/details/' //object of objects


    const res = await fetch(urlTitles);
    const userData = await res.json();

    userData.forEach(article => {
        const accordionDiv = createAccordion(article);
        main.appendChild(accordionDiv);
    });

    function createAccordion(article) {
        const firstDiv = e('div', { className: 'accordion' },
            e('div', { className: 'head' },
                e('span', {}, article.title),
                e('button', { className: 'button', id: article._id, onClick: toggleDetails }, "More"),
            ),
            e('div', { className: 'extra' },
            )
        );
        return firstDiv;
    };

    async function toggleDetails(event) {
        const button = event.target;
        const articleID = button.id;
        const accordionDiv = button.parentElement.parentElement;
        const extraDiv = accordionDiv.querySelector('.extra');
        const isHidden = button.textContent.toLowerCase() === 'more';

        if (isHidden) {
            const res = await fetch(urlDetails + articleID);
            const detailsData = await res.json();
            extraDiv.appendChild(e('p', {}, detailsData.content));
            extraDiv.style.display = 'block';
            button.textContent = 'Less'
        } else {
            extraDiv.style.display = 'none';
            button.textContent = 'More';
        };
    };

    function e(tag, attribute, ...content) {
        const result = document.createElement(tag);
        for (let [attr, value] of Object.entries(attribute || {})) {
            if (attr.substring(0, 2) === 'on') {
                result.addEventListener(attr.substring(2).toLowerCase(), value);
            } else {
                result[attr] = value;
            };
        };
        content.forEach(c => {
            if (typeof c === 'string' || typeof c === 'number') {
                result.appendChild(document.createTextNode(c));
            } else {
                result.appendChild(c);
            };
        });
        return result;
    };
}

solution();