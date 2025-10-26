import { Router } from "express";

const postsController = new Router();

postsController.get('/create', (req, res) => {
    res.render('posts/create')
})

export default postsController;