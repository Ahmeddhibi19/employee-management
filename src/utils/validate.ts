// src/utils/validate.ts
import Joi from 'joi';

export const employeeValidationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    position: Joi.string().required(),
    department: Joi.string().optional(),
    salary: Joi.number().required(),
});
