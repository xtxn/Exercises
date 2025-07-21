import { cats } from "./catSeeder.js";
import { html, render } from "./node_modules/lit-html/lit-html.js"

const renderTo = document.getElementById('allCats');

const template = (cats) => {
    return html`
    <ul>
        ${cats.map(cat =>
        html`<li>
            <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
            <div class="info">
                <button class="showBtn" @click=${onClick}>Show status code</button>
                <div class="status" style="display: none" id=${cat.id}>
                    <h4 class="card-title">Status Code: ${cat.statusCode}</h4>
                    <p class="card-text">${cat.statusMessage}</p>
                </div>
            </div>
        </li>`
    )}
</ul>
`
};

render(template(cats), renderTo);

function onClick(e) {
    if (e.target.textContent === 'Show status code') {
        e.target.parentElement.querySelector('button+div').style.display = "block";
        e.target.textContent = 'Hide status code'
    } else {
        e.target.parentElement.querySelector('button+div').style.display = "none";
        e.target.textContent = 'Show status code'
    };
}