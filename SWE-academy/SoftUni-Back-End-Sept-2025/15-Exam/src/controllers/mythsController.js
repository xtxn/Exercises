import { Router } from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import mythService from "../services/mythService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const mythsController = new Router();

mythsController.get('/dashboard', (req, res) => {
    res.render('myths/dashboard');
})

mythsController.get('/create', isAuth, (req, res) => {
    res.render('myths/create')
});

mythsController.post('/create', isAuth, async (req, res) => {

    const mythData = req.body;
    const userId = req.user.id;

    try {
        await mythService.create(mythData, userId);
        res.redirect('/myths/dashboard');

    } catch (error) {
        res.render('myths/create', {
            error: getErrorMessage(error),
            myth: mythData,
        });
    }
});

export default mythsController;