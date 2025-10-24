import { Router } from "express";

const errorController = Router();

errorController.all('/*splat', (req, res) => {
    res.render('404', { pageTitle: 404 })
});

export default errorController;