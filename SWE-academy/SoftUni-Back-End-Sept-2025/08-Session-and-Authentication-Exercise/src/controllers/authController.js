import { Router } from "express";
import userService from "../services/userService.js"

const authController = new Router();

authController.get('/register', (req, res) => {
    res.render('auth/register');
});

authController.post('/register', async (req, res) => {
    const userData = req.body;

    await userService.register(userData);

    res.redirect('/auth/login');
});

authController.get('/login', (req, res) => {
    res.render('auth/login');
});

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const token = await userService.login(email, password);

    res.cookie('auth', token)

    res.redirect('/');
});

export default authController;