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
import { Favorite } from "../db/models/favoriteModel.js";
const router = Router();
router.post('/favorites', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, niggunId } = req.body;
        const favorite = yield Favorite.create({
            userId, niggunId
        });
        res.status(201).json(favorite);
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ message: 'שגיאה ביצירת מועדפים חדשים' });
    }
}));
router.delete('favorites/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield Favorite.findByIdAndDelete(id);
        res.status(200).json({ message: 'הניגון נמחק בהצלחה ממועדפים' });
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ message: 'שגיאה במחיקת הניגון ממועדפים' });
    }
}));
// קבלת רשימת המועדפים
/* app.get('/favorites/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const favorites = await Favorite.find({ userId });
        res.status(200).json(favorites);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'שגיאה בקבלת רשימת המועדפים' });
    }
}); */ 
