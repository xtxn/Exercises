import { Router } from "express";
import movieService from "../services/movieService.js";
import castService from "../services/castService.js";
import { isAuth } from "../middlewares/authMiddleware.js";

export const movieController = Router();

movieController.get('/create', isAuth, (req, res) => {
    res.render('movies/create', { pageTitle: "Create Movie" });
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
    let movieCasts = [];

    if (movie.casts && movie.casts.length > 0) {
        movieCasts = await castService.getAllCast({ includes: movie.casts });
    }

    res.render('movies/details', { ...movie, pageTitle: "Movie Details", rating: startCount, casts: movieCasts });
});

movieController.get('/search', async (req, res) => {
    const filter = req.query;
    const movies = await movieService.getAllMovies(filter);

    res.render('search', { movies, filter, pageTitle: "Search Movies" })
});

movieController.get('/:movieId/attach', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOneMovie(movieId);
    const casts = await castService.getAllCast({ excludes: movie.casts });

    res.render('casts/attach', { movie, casts });
})

movieController.post('/:movieId/attach', async (req, res) => {
    const movieId = req.params.movieId;
    const castId = req.body.cast;
    await movieService.attach(movieId, castId);
    res.redirect(`/movies/${movieId}/details`)
})