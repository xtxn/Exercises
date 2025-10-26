import { Router } from "express";
import mythService from "../services/mythService.js";

const homeController = Router();

homeController.get('/', async (req, res) => {

    const latest = await mythService.getSorted();
    res.render('home', { latest });
});

// homeController.post('/', (req, res) => {
//     console.log(req.body);
//     res.end();
// });

export default homeController;