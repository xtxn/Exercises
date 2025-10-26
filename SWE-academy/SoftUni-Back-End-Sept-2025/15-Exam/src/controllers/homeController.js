import { Router } from "express";
import mythService from "../services/mythService.js";

const homeController = Router();

homeController.get('/', async (req, res) => {

    const latest = await mythService.getSorted();
    res.render('home', { latest });
});

homeController.get('/report', (req, res) => {
    res.render('report');
})

export default homeController;