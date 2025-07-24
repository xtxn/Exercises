import { showView } from "../src/utils.js";

const homeView = document.getElementById('home-page');
const movieList = document.getElementById('movies-list');

export function showHome() {
    showView(homeView);
    displayCards();
}

async function displayCards() {
    const movies = await getAllMovies();
    movieList.replaceChildren(...movies.map(movie => movieCard(movie)));
}

function movieCard(movie) {
    const li = document.createElement('li');
    li.classList.add('card', 'mb-4')
    li.innerHTML = `
    <img class="card-img-top" 
        src="${movie.img}"
        alt="Card image cap" width="400" />
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
        <a href="#">
        </a>
    </div>                   
    <div class="card-footer">
        <button type="button" class="btn btn-info">Details</button>
    </div>`

    return li;
}

async function getAllMovies() {
    const url = 'http://localhost:3030/data/movies'
    const res = await fetch(url);
    const movies = await res.json();

    return movies;
}

