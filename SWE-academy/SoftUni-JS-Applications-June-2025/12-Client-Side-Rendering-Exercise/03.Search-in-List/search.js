import { towns } from "./towns.js"
import { html, render } from "./node_modules/lit-html/lit-html.js"

const outputDiv = document.getElementById("towns");
const searchText = document.getElementById("searchText");
const btnSearch = document.querySelector("article>button");
const result = document.getElementById("result");

function search() {
   btnSearch.addEventListener("click", onClick);

}
render(loadData(towns), outputDiv);

function loadData(data) {
   return html`<ul>${loadCities(data)}</ul>`
}

function loadCities(data) {
   return data.map(city => html`<li>${city}</li>`);
};

function onClick(e) {
   let cities = Array.from(document.querySelectorAll("#towns>ul *"));

   cities.map(city => city.classList.remove(...city.classList))

   cities.map(city => findMatch(city));
   result.textContent = `${matches} matches found`
   matches = 0;

}
let matches = 0;

function findMatch(city) {
   if (searchText.value === '') {
      return;
   }
   if (city.textContent.includes(searchText.value)) {
      city.classList.add("active");
      matches++;
   }
}

search()



