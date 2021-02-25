import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { SurveysController } from './controllers/SurveysController';
import { SendMailController } from './controllers/SendMailController';

const routes = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();

routes.get('/users', userController.show);
routes.post('/users', userController.create);

routes.get('/surveys', surveysController.show);
routes.post('/surveys', surveysController.create);

routes.post('/sendMail', sendMailController.execute);

export { routes };