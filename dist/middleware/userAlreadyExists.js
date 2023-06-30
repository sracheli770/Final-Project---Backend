var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { User } from "../db/models/userModel.js";
const userAlreadyExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundEmail = yield User.findOne({ email: req.body.email });
        if (foundEmail) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const foundUserName = yield User.findOne({ userName: req.body.userName });
        if (foundUserName) {
            return res.status(400).json({ message: 'UserName already exists' });
        }
        next();
    }
    catch (e) {
        res.status(500).json({ message: e });
    }
});
export { userAlreadyExists };
