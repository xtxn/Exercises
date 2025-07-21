import { html, render } from "./node_modules/lit-html/lit-html.js";

const btnInput = document.getElementById('btnLoadTowns');
const renderField = document.getElementById('root');
let inputTowns = document.getElementById('towns');

btnInput.addEventListener('click', onClick);

function onClick(e) {
    e.preventDefault();

    const cities = inputTowns.value.split(', ');

    if (!inputTowns.value) {
        return;
    }

    renderTowns(cities);
    inputTowns.value = '';

};

const renderTowns = (cities) => {
    return render(template(cities), renderField);
};

const template = (cities) => {
    return html`
        <ul>
        ${cities.map(city => html`<li>${city}</li>`)}
        </ul>`
}