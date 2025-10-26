import { Router } from "express";
import homeController from "./controllers/homeController.js";
import errorController from "./controllers/errorController.js";
import userController from "./controllers/userController.js";
import postsController from "./controllers/postsController.js";

const routes = Router();

routes.use(homeController);
routes.use('/users/', userController);
routes.use('/posts/', postsController)


routes.use(errorController);

export default routes;