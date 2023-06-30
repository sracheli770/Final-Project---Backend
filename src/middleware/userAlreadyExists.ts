import { RequestHandler } from "express";
import { User } from "../db/models/userModel.js";

const userAlreadyExists: RequestHandler = async (req, res, next) => {
    try {
        const foundEmail = await User.findOne({ email: req.body.email })
        if (foundEmail) {
            return res.status(400).json({ message: 'Email already exists' })
        }

        const foundUserName = await User.findOne({ userName: req.body.userName })
        if (foundUserName) {
            return res.status(400).json({ message: 'UserName already exists' })
        }

        next()
    }

    catch (e) {
        res.status(500).json({ message: e })
    }
}

export { userAlreadyExists }