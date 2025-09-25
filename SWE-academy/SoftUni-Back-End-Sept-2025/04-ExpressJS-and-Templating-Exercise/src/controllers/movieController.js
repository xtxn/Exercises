import { Router } from "express";
import movieService from "../services/movieService.js";

export const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create');
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

    res.render('details', movie);
});

movieController.get('/search', async (req, res) => {
    const filter = req.query;
    const movies = await movieService.getAllMovies(filter);

    res.render('search', { movies })
})