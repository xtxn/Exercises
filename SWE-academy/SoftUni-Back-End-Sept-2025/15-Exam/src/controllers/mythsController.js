import { Router } from "express";
import { isAuth } from "../middlewares/authMiddleware.js";

const mythsController = new Router();

mythsController.get('/dashboard', (req, res) => {
    res.render('myths/dashboard');
})

mythsController.get('/create', isAuth, (req, res) => {
    res.render('myths/create')
});

mythsController.post('/create', isAuth, (req, res) => {
    console.log(req.body);

    res.redirect('/myths/dashboard');
});

export default mythsController;