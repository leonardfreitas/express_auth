import { Router } from 'express';

import authRouter from '@modules/users/routes/auth.routes';
import userRouter from '@modules/users/routes/user.routes';

const routes = Router();

routes.use('/auth', authRouter);
routes.use('/users', userRouter);

export default routes;
