import { Router } from 'express';

import UserController from '../controllers/UserController';
import {
  userDetailValidator,
  userUpdateValidator,
  userDeleteValidator,
} from '../validators/user.validators';
import isAuth from '@shared/http/middlewares/isAuth.middleware';

const userRouter = Router();

const userController = new UserController();

userRouter.get('/', isAuth, userController.list);
userRouter.get('/:id', isAuth, userDetailValidator, userController.detail);
userRouter.put('/:id', isAuth, userUpdateValidator, userController.update);
userRouter.delete('/:id', isAuth, userDeleteValidator, userController.delete);

export default userRouter;
