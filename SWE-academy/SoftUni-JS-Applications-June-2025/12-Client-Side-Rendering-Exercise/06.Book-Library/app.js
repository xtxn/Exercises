import { html, render } from "./node_modules/lit-html/lit-html.js"


const body = document.querySelector('body');
const url = 'http://localhost:3030/jsonstore/collections/books';

const tHead = html`<tr>
    <th>Title</th>
    <th>Author</th>
    <th>Action</th>
</tr>`

const addFormHtml = html` 
    <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">`

const editFormHtml = html`
   <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
        `
onSiteLoad();

const addForm = document.getElementById('add-form');
const editForm = document.getElementById('edit-form');
const tableBody = document.querySelector('tbody');

document.getElementById('loadBooks').addEventListener('click', onLoad);
document.querySelector('table').addEventListener('click', tableClick);

addForm.addEventListener('submit', onSubmit);
editForm.addEventListener('submit', onSave);

function onSiteLoad() {
    const outerTemplate = html`
    <button id="loadBooks">LOAD ALL BOOKS</button>
    <table>
        <thead>
            ${tHead}
        </thead>
        <tbody>
        </tbody>
    </table>
    
    <form id="add-form" style="display:block">
       ${addFormHtml}
    </form>
    
    <form id="edit-form" style="display:none">
        ${editFormHtml}
    </form>`

    render(outerTemplate, body)
};

const bookTemplate = (book) => html`
<tr data-id = ${book[0]}>
    <td class='title'>${book[1].title}</td>
    <td class='author'>${book[1].author}</td>
    <td>
        <button>Edit</button>
        <button>Delete</button>
    </td>
</tr>
`

async function onLoad(e) {
    const res = await fetch(url);
    const data = await res.json();
    const booksToAdd = Object.entries(data).map(book => bookTemplate(book))

    render(booksToAdd, tableBody)
};

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (!data.title || !data.author) {
        return;
    };

    const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    };
    const res = await fetch(url, option)

    addForm.reset();

    onLoad();

};

function tableClick(e) {
    if (e.target.tagName !== 'BUTTON') {
        return;
    }
    let button = e.target;
    button.textContent === 'Edit' ? onEdit(e) : onDelete(e);
};

let currentBookId = null;

async function onEdit(e) {
    e.preventDefault();
    currentBookId = e.target.parentElement.parentElement.dataset.id

    const parent = e.target.parentElement.parentElement;
    const title = parent.querySelector('.title').textContent
    const author = parent.querySelector('.author').textContent

    addForm.style.display = "none";
    editForm.style.display = "block"

    editForm.querySelector('input[name="title"]').value = title;
    editForm.querySelector('input[name="author"]').value = author;
};

async function onSave(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    const currentUrl = `${url}/${currentBookId}`;

    const option = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    }

    const res = await fetch(currentUrl, option)
    onLoad();
    addForm.style.display = "block";
    editForm.style.display = "none";
    currentBookId = null;
};

async function onDelete(e) {
    const bookId = e.target.parentElement.parentElement.dataset.id
    const currentUrl = `${url}/${bookId}`;
    const res = await fetch(currentUrl, { method: "DELETE" });
    onLoad();
};

