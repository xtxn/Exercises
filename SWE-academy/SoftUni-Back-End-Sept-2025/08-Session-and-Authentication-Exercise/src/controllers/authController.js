import { Router } from "express";
import userService from "../services/authService.js"
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";

const authController = new Router();

authController.get('/register', isGuest, (req, res) => {
    res.render('auth/register');
});

authController.post('/register', isGuest, async (req, res) => {
    const userData = req.body;

    await userService.register(userData);

    res.redirect('/auth/login');
});

authController.get('/login', isGuest, (req, res) => {
    res.render('auth/login');
});

authController.post('/login', isGuest, async (req, res) => {
    const { email, password } = req.body;
    const token = await userService.login(email, password);

    res.cookie('auth', token)

    res.redirect('/');
});

authController.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
})

export default authController;