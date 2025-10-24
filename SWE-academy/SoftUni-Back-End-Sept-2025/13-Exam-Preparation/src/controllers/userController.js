import { Router } from "express";
import userService from "../services/userService.js";

const userController = Router();

userController.get('/register', (req, res) => {
    res.render('users/register')
});

userController.post('/register', async (req, res) => {
    const { email, password } = req.body;

    await userService.register(email, password);

    res.redirect('/');
})

userController.get('/login', (req, res) => {
    res.render('users/login');
})

userController.post('/login', async (req, res) => {
    const { email, password } = req.body;
    await userService.login(email, password);

    res.redirect('/')
})

export default userController;