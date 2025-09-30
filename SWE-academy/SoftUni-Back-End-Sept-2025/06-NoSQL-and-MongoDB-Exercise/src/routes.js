import { Router } from 'express';

import { homeController } from './controllers/homeController.js';
import { movieController } from './controllers/movieController.js';
import castController from './controllers/castController.js';

export const routes = Router();

routes.use(homeController);
routes.use('/movies', movieController);
routes.get('*splat', (req, res) => {
    res.render('404');
});
routes.get('/casts', castController);
