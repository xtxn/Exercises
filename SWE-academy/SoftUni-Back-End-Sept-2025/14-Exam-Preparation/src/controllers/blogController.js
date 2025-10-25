import { Router } from "express";
import blogService from "../services/blogService.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const blogController = Router();

blogController.get('/catalog', async (req, res) => {
    const blogs = await blogService.getAll();

    res.render('blogs/catalog', { blogs });
});

blogController.get('/create', isAuth, (req, res) => {
    res.render('blogs/create');
});

blogController.post('/create', isAuth, async (req, res) => {
    const blogData = req.body;
    const userId = req.user.id;

    try {
        await blogService.create(blogData, userId);
        res.redirect('/blogs/catalog')

    } catch (error) {
        res.render('blogs/create', {
            error: getErrorMessage(error),
            blog: blogData,
        })
    }
});

blogController.get('/:blogId/details', async (req, res) => {

    const blogId = req.params.blogId;
    const blog = await blogService.getOne(blogId);

    res.render('blogs/details', { blog });
})

export default blogController;