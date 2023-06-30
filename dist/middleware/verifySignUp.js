import _ from "underscore";
import { signUpSchema } from "../validators/users.js";
const validateSignUp = (req, res, next) => {
    const body = _.pick(req.body, "userName", "email", "password");
    const { error } = signUpSchema.validate(body);
    if (error) {
        return res.status(400).json({
            message: 'Validation Failed',
            errors: error.details.map(e => e.message)
        });
    }
    next();
};
export { validateSignUp };
