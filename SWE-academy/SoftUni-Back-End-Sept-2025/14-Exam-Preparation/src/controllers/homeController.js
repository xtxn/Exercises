import { Router } from "express";
import blogService from "../services/blogService.js";

const homeController = Router();

homeController.get('/', async (req, res) => {
    const latestBlogs = await blogService.getLatest();
    res.render('home', { latestBlogs });
});

homeController.post('/', (req, res) => {
    console.log(req.body);
    res.end();
});

export default homeController;