import { html, render } from "./node_modules/lit-html/lit-html.js"

const url = "http://localhost:3030/jsonstore/advanced/table";
const body = document.querySelector("tbody");
const searchField = document.getElementById("searchField");

getData();

async function getData() {
   const response = await fetch(url);
   const data = await response.json();
   const nameBook = Object.values(data);

   render(rowTemplate(nameBook), body);
};

document.querySelector('#searchBtn').addEventListener('click', onClick);

function onClick(e) {
   if (!searchField.value) {
      return;
   };

   const allRows = document.querySelectorAll(".container>tbody>tr");
   const allEl = document.querySelectorAll(".container>tbody>tr>td");
   allRows.forEach(tr => tr.classList.remove('select'));

   for (const el of allEl) {
      if (el.textContent.toLowerCase().includes(searchField.value.toLowerCase())) {
         el.parentElement.classList.add('select');
      }
   }
}

const rowTemplate = (data) =>
   data.map((line) =>
      html`
       <tr>
                <td>${line.firstName} ${line.lastName}</td>
                <td>${line.email}</td>
                <td>${line.course}</td>
            </tr>
` );
