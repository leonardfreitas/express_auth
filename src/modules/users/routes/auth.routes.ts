import { Router } from 'express';

import AuthController from '../controllers/AuthController';
import {
  signUpValidator,
  signInValidator,
} from '../validators/auth.validators';

const authRouter = Router();

const authController = new AuthController();

authRouter.post('/signup', signUpValidator, authController.signup);
authRouter.post('/signin', signInValidator, authController.signin);

export default authRouter;
