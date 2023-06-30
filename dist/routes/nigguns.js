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
import { Niggun } from "../db/models/niggunModel.js";
const router = Router();
import _ from 'underscore';
import { niggunValidate } from "../validators/nigguns.js";
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const niggun = _.pick(req.body, "name", "easyMovie", "advancedMovie", "notes", "description", "rebbe", "isFavorite");
        const validationNiggun = niggunValidate.validate(niggun);
        const err = validationNiggun.error;
        if (err) {
            return res.status(400).json(err.details.map(o => o.message));
        }
        const newNiggun = yield new Niggun(niggun).save();
        res.json({ message: "Niggun saved", id: newNiggun.id });
    }
    catch (e) {
        res.status(500).json({ message: `Error: ${e}` });
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nigguns = yield Niggun.find();
        res.json(nigguns);
    }
    catch (e) {
        res.status(500).json({ message: `Error: ${e}` });
    }
}));
export { router as niggunsRouter };
