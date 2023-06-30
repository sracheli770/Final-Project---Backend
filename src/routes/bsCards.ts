import { Router } from "express";
import { Card } from "../db/models/bsModel.js";
const router = Router()
import _ from 'underscore'
import { cardSchema } from "../validators/cards.js";

router.post('/', async (req, res) => {
    try {
        const card = _.pick(req.body, "name", "description", "address", "phone", "image", "bsId")

        const validationCard = cardSchema.validate(card)

        const err = validationCard.error
        if (err) {
            return res.status(400).json(err.details.map(o => o.message))
        }

        const newCard = await new Card(card).save()
        
        res.json({ message: "Card saved", id: newCard.id })
    }

    catch (e) {
        res.status(500).json({ message: `Error: ${e}` })
    }
})

router.get('/', async (req, res) => {
    try {
        const cards = await Card.find()
        res.json(cards)
    }

    catch (e) {
        res.status(500).json({ message: `Error: ${e}` })
    }
})

export { router as cardsRouter }