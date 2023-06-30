var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from "express";
import _ from "underscore";
import { User } from "../db/models/user.js";
import { userSchema } from "../validators/users.js";
const router = Router();
router.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = _.pick(req.body, "userName", "email", "password");
    const { error } = userSchema.validate(body);
    if (error) {
        return res.status(400).json({
            message: 'Validation Failed',
            errors: error.details.map(e => e.message)
        });
    }
    try {
        const user = yield new User(body).save();
        return res.json({ message: 'User Saved', id: user._id });
    }
    catch (e) {
        return res.status(500).json({ message: "Server db Error", error: e });
    }
}));
export { router as userRouter };
