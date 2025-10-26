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
    const userId = req.user?.id;

    const myth = await mythService.getOne(mythId);
    const isOwner = myth.owner.equals(userId);

    const isLiked = myth.likedList.some(like => like.equals(userId));

    res.render('myths/details', { myth, isOwner, isLiked });
});

mythsController.get('/:mythId/like', isAuth, async (req, res) => {
    const mythId = req.params.mythId;
    const userId = req.user.id;
    try {
        await mythService.like(mythId, userId);
        res.redirect(`/myths/${mythId}/details`);
    } catch (error) {
        res.render('404', {
            error: getErrorMessage(error),
        });
    }
});

mythsController.get('/:mythId/delete', isAuth, async (req, res) => {
    const mythId = req.params.mythId;
    const userId = req.user?.id;

    try {
        await mythService.remove(mythId, userId);
        res.redirect('/myths/dashboard');

    } catch (error) {
        res.render('404', {
            error: getErrorMessage(error),
        });
    }
});

mythsController.get('/:mythId/edit', isAuth, async (req, res) => {
    const mythId = req.params.mythId;
    const myth = await mythService.getOne(mythId);
    try {
        if (!myth.owner.equals(req.user.id)) {
            throw new Error('Cannot edit myth if not the creator')
        }
        res.render('myths/edit', { myth });
    } catch (error) {
        res.render('404', {
            error: getErrorMessage(error)
        });
    }
});

mythsController.post('/:mythId/edit', isAuth, async (req, res) => {
    const mythId = req.params.mythId;
    const mythData = req.body;

    try {
        if (!myth.owner.equals(req.user.id)) {
            throw new Error('Cannot edit myth if not the creator')
        }

        await mythService.edit(mythId, mythData);
        res.redirect(`/myths/${mythId}/details`);

    } catch (error) {
        res.render('myths/edit', {
            myth: mythData,
            error: getErrorMessage(error),
        });
    }
});

export default mythsController;