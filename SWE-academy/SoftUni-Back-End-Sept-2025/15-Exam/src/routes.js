import { Router } from "express";
import homeController from "./controllers/homeController.js";
import errorController from "./controllers/errorController.js";
import userController from "./controllers/userController.js";
import mythsController from "./controllers/mythsController.js";

const routes = Router();

routes.use(homeController);
routes.use('/users/', userController);
routes.use('/myths/', mythsController)


routes.use(errorController);

export default routes;