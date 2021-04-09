import { Segments, Joi, celebrate } from 'celebrate';

export const userDetailValidator = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
});

export const userUpdateValidator = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
});

export const userDeleteValidator = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
});
