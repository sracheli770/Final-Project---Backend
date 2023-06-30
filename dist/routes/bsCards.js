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
import { Card } from "../db/models/bsModel.js";
const router = Router();
import _ from 'underscore';
import { cardSchema } from "../validators/cards.js";
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const card = _.pick(req.body, "name", "description", "address", "phone", "image", "bsId");
        const validationCard = cardSchema.validate(card);
        const err = validationCard.error;
        if (err) {
            return res.status(400).json(err.details.map(o => o.message));
        }
        const newCard = yield new Card(card).save();
        res.json({ message: "Card saved", id: newCard.id });
    }
    catch (e) {
        res.status(500).json({ message: `Error: ${e}` });
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cards = yield Card.find();
        res.json(cards);
    }
    catch (e) {
        res.status(500).json({ message: `Error: ${e}` });
    }
}));
export { router as cardsRouter };
