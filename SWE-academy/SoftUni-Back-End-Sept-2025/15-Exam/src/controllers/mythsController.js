import { Router } from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import mythService from "../services/mythService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const mythsController = new Router();

mythsController.get('/dashboard', async (req, res) => {
    const myths = await mythService.getAll();
    res.render('myths/dashboard', { myths, pageTitle: 'Dashboard' });
})

mythsController.get('/create', isAuth, (req, res) => {
    res.render('myths/create', { pageTitle: 'Create' })
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
            pageTitle: 'Create',
        });
    }
});

mythsController.get('/:mythId/details', async (req, res) => {
    const mythId = req.params.mythId;
    const myth = await mythService.getOne(mythId);

    res.render('myths/details', { myth });
})

export default mythsController;