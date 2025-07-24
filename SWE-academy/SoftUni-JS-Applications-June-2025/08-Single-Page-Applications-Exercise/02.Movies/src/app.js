import { showHome } from "../views/homeView.js";
import { showRegister } from "../views/registerView.js";
import { showLogin } from "../views/loginView.js";
import { showAdd } from "../views/addView.js";

// const endpoints = {
//     allMovies: '/data/movies',
//     createMovie: '/data/movies',
//     updateMovie: (id) => `/data/movies/${id}`,
//     deleteMovie: (id) => `/data/movies/${id}`,
//     likes: (movieId) =>
//         `/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`,
//     getLike: (movieId, userId) =>
//         `/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`,
//     addLike: '/data/likes',
// };

const routes = {
    '/': showHome,
    '/register': showRegister,
    '/login': showLogin,
    '/create': showAdd,
    // '/logout': logout,
};


const navbar = document.querySelector('.navbar');
navbar.addEventListener('click', onNavigate);
const btnAdd = document.querySelector('.btn.btn-warning')
btnAdd.addEventListener('click', onNavigate);

function onNavigate(event) {
    if (event.target.tagName == 'A' && event.target.href) {
        event.preventDefault();

        const url = new URL(event.target.href.toString());
        const path = url.pathname;
        const viewCall = routes[path];

        if (typeof viewCall == 'function') {
            viewCall();
        }
    }
}

const editView = document.getElementById('edit-movie');
const detailsView = document.getElementById('movie-example');
showHome();
