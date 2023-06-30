import { Router } from "express";
import { Niggun } from "../db/models/niggunModel.js";
const router = Router();
import _ from 'underscore';
import { niggunValidate } from "../validators/nigguns.js";

router.post('/', async (req, res) => {
    try {
        const niggun = _.pick(req.body, "name", "easyMovie", "advancedMovie", "notes", "description", "rebbe", "isFavorite")

        const validationNiggun = niggunValidate.validate(niggun)

        const err = validationNiggun.error
        if (err) {
            return res.status(400).json(err.details.map(o => o.message))
        }

        const newNiggun = await new Niggun(niggun).save()

        res.json({ message: "Niggun saved", id: newNiggun.id })
    }

    catch (e) {
        res.status(500).json({ message: `Error: ${e}` })
    }
})


router.get('/', async (req, res) => {
    try {
        const nigguns = await Niggun.find()
        res.json(nigguns)
    }

    catch (e) {
        res.status(500).json({ message: `Error: ${e}` })
    }
})

export { router as niggunsRouter }