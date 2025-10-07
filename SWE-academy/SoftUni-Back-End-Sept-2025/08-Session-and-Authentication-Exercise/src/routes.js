import { Router } from 'express';

import { homeController } from './controllers/homeController.js';
import { movieController } from './controllers/movieController.js';
import castController from './controllers/castController.js';
import authController from './controllers/authController.js';

export const routes = Router();

routes.use(homeController);
routes.use('/movies', movieController);
routes.use('/casts', castController);
routes.use('/auth', authController)
routes.get('*splat', (req, res) => {
    res.render('404');
});
