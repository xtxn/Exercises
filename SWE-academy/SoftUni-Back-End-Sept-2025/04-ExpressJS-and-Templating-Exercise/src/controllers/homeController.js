import { Router } from "express";
import movieService from "../services/movieService.js";

export const homeController = Router();

homeController.get('/', async (req, res) => {
    const movies = await movieService.getAllMovies();
    console.log(movies);

    res.render('home', { movies });
});

homeController.get('/about', (req, res) => {
    res.render('about');
});


