import joi from 'joi';
import { passwordRegex } from './utils.js';
const signUpSchema = joi.object({
    userName: joi.string().min(2).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().regex(passwordRegex).required()
});
const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().regex(passwordRegex).required()
});
export { signUpSchema, signInSchema };
