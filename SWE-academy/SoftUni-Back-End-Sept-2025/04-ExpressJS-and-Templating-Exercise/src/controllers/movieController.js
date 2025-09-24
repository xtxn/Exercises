import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';
import Movie from "../models/Movie.js";

export const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create');
});

movieController.post('/create', (req, res) => {
    const addedMovie = req.body;
    addedMovie._id = uuidv4();
    console.log(addedMovie);

    res.redirect('/')
})