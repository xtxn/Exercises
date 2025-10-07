import { Router } from "express";

const authController = new Router();

authController.get('/', (req, res) => {
    res.send('It works');
})

export default authController;