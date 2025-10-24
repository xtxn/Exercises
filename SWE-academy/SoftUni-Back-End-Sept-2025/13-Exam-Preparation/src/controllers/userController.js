import { Router } from "express";
import userService from "../services/userService.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";

const userController = Router();

userController.get('/register', isGuest, (req, res) => {
    res.render('users/register')
});

userController.post('/register', isGuest, async (req, res) => {
    const { email, password } = req.body;

    const token = await userService.register(email, password);

    res.cookie('auth', token)

    res.redirect('/');
});

userController.get('/login', isGuest, (req, res) => {
    res.render('users/login');
});

userController.post('/login', isGuest, async (req, res) => {
    const { email, password } = req.body;
    const token = await userService.login(email, password);

    res.cookie('auth', token);

    res.redirect('/')
});

userController.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

export default userController;