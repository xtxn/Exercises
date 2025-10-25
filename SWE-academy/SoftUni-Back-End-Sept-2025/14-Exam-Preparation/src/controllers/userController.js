import { Router } from "express";
import userService from "../services/userService.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import blogService from "../services/blogService.js";

const userController = Router();

userController.get('/register', isGuest, (req, res) => {
    res.render('users/register', { pageTitle: 'Register' })
});

userController.post('/register', isGuest, async (req, res) => {
    const { username, email, password, repeatPass } = req.body;
    try {
        const token = await userService.register(username, email, password, repeatPass);
        res.cookie('auth', token)
        res.redirect('/');

    } catch (error) {
        res.render('users/register', {
            error: getErrorMessage(error),
            user: { username, email },
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

userController.get('/profile', isAuth, async (req, res) => {
    const userId = req.user.id;
    const createdBlogs = await blogService.getAllByOwner(userId);
    const followedBlogs = await blogService.getAllByFollower(userId);

    const createdBlogsCount = createdBlogs.length;
    const followedBlogsCount = followedBlogs.length;

    res.render('users/profile', { createdBlogs, followedBlogs, createdBlogsCount, followedBlogsCount });
})

export default userController;