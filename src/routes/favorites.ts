import { Router } from "express";
import { Favorite } from "../db/models/favoriteModel.js";
const router = Router();
import _ from 'underscore';

router.post('/favorites', async (req,res)=>{
    try{
        const {userId, niggunId} = req.body;
        const favorite = await Favorite.create({
            userId,niggunId
        });
        res.status(201).json(favorite)
    }
    catch(e){
        console.error(e);
        res.status(500).json({message:'שגיאה ביצירת מועדפים חדשים'})
    }
})

router.delete('favorites/:id', async (req,res)=>{
    try{
const {id}=req.params;
await Favorite.findByIdAndDelete(id);
res.status(200).json({message:'הניגון נמחק בהצלחה ממועדפים'});
    }
    catch(e){
console.error(e);
res.status(500).json({message:'שגיאה במחיקת הניגון ממועדפים'})
    }
})


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