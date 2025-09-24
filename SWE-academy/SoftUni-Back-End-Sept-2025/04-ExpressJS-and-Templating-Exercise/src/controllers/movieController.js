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

movieController.get('/:movieId/details', (req, res) => {
    const movieId = req.params.movieId

    res.render('details');
});