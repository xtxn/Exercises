import { html, render } from "./node_modules/lit-html/lit-html.js"

const inputField = document.getElementById("itemText")
const dropDown = document.getElementById("menu");
const url = "http://localhost:3030/jsonstore/advanced/dropdown"

loadData();

async function loadData() {
    const response = await fetch(url);
    const data = await response.json();
    const cities = Object.values(data);
    render(template(cities), dropDown);
};

document.querySelector("form").addEventListener("submit", onSubmit);

async function onSubmit(e) {
    e.preventDefault();
    if (!inputField.value) {
        return;
    }
    addItem(inputField.value)
};

async function addItem(value) {
    const text = value;
    const data = { text }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    };

    const response = await fetch(url, options)
    inputField.value = '';
    loadData();
};

function template(data) {
    return data.map(city => addCity(city));
};

function addCity(city) {
    return html`<option value=${city._id}>${city.text}</option>`
};