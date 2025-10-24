import { Router } from "express";
import userService from "../services/userService.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const userController = Router();

userController.get('/register', isGuest, (req, res) => {
    res.render('users/register', { pageTitle: 'Register' })
});

userController.post('/register', isGuest, async (req, res) => {
    const { email, password, repeatPass } = req.body;
    try {
        const token = await userService.register(email, password, repeatPass);
        res.cookie('auth', token)
        res.redirect('/');

    } catch (error) {
        res.render('users/register', {
            error: getErrorMessage(error),
            user: { email },
        });
    }

});

userController.get('/login', isGuest, (req, res) => {
    res.render('users/login', { pageTitle: 'Login' });
});

userController.post('/login', isGuest, async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await userService.login(email, password);

        res.cookie('auth', token);
        res.redirect('/')
    } catch (error) {
        res.render('users/login', {
            error: getErrorMessage(error),
            user: { email },
        })
    }
});

userController.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

export default userController;