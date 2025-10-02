import { Router } from "express";
import movieService from "../services/movieService.js";
import castService from "../services/castService.js";

export const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create', { pageTitle: "Create Movie" });
});

movieController.post('/create', async (req, res) => {
    const addedMovie = req.body;
    addedMovie.rating = parseInt(addedMovie.rating);
    await movieService.createMovie(addedMovie);
    res.redirect('/')
});

movieController.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOneMovie(movieId);
    const startCount = '&#x2605;'.repeat(Math.floor(movie.rating));

    res.render('details', { ...movie, pageTitle: "Movie Details", rating: startCount });
});

movieController.get('/search', async (req, res) => {
    const filter = req.query;
    const movies = await movieService.getAllMovies(filter);

    res.render('search', { movies, filter, pageTitle: "Search Movies" })
});

movieController.get('/:movieId/attach', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOneMovie(movieId);

    res.render('casts/attach', { movie });
})