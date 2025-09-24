import { Router } from "express";

export const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create');
});
