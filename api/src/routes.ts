import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { SurveysController } from './controllers/SurveysController';

const routes = Router();

const userController = new UserController();
const surveysController = new SurveysController();

routes.get('/users', userController.show);
routes.post('/users', userController.create);

routes.get('/surveys', surveysController.show);
routes.post('/surveys', surveysController.create);

export { routes };