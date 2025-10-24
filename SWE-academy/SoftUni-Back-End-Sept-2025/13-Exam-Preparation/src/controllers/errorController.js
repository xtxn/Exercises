import { Router } from "express";

const errorController = Router();

errorController.all('/*splat', (req, res) => {
    res.send('404 Page')
});

export default errorController;