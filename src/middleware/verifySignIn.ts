import { RequestHandler } from "express";
import _ from "underscore";
import { signInSchema } from "../validators/users.js";

const validateSignIn: RequestHandler = (req, res, next) => {
    const body = _.pick(req.body, 'email', 'password')
    const { error } = signInSchema.validate(body)

    if (error) {
        return res.status(400).json({
            message: 'Validation Failed',
            errors: error.details.map(e => e.message)
        })
    }

    next()
}

export { validateSignIn }