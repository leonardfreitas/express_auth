import { Segments, Joi, celebrate } from 'celebrate';

export const signUpValidator = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    cpf: Joi.string().required(),
    phone_number: Joi.string().required(),
    password: Joi.string().required(),
  },
});

export const signInValidator = celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
});
