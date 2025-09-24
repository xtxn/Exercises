import { Router } from 'express';

import { homeController } from './controllers/homeController.js';
import { movieController } from './controllers/movieController.js';

export const routes = Router();

routes.use(homeController);
routes.use('/movies', movieController);
routes.get('*splat', (req, res) => {
    res.render('404');
});
