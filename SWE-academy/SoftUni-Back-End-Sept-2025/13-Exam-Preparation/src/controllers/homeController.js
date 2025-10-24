import { Router } from "express";

const homeController = Router();

homeController.get('/', (req, res) => {
    res.render('home', { layout: false })
});

homeController.post('/', (req, res) => {
    console.log(req.body);
    res.end();
})

export default homeController;