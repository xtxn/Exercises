import { Router } from "express";
import castService from "../services/castService.js";

const castController = Router();

castController.get('/create', (req, res) => {
    res.render('casts/create', { pageTitle: 'Create Cast' });
});

castController.post('/create', async (req, res) => {
    const addedCast = req.body;
    await castService.create(addedCast);

    res.redirect('/');
})

export default castController;