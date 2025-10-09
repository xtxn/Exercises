import { Router } from "express";
import castService from "../services/castService.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const castController = Router();

castController.get('/create', isAuth, (req, res) => {
    res.render('casts/create', { pageTitle: 'Create Cast' });
});

castController.post('/create', isAuth, async (req, res) => {
    const addedCast = req.body;
    await castService.create(addedCast);

    res.redirect('/');
})

export default castController;