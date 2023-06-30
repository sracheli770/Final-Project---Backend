import { Router } from "express";
import _ from "underscore";
import { User } from "../db/models/userModel.js";
import { userAlreadyExists } from "../middleware/userAlreadyExists.js";
import { validateSignUp } from "../middleware/verifySignUp.js";
import bcrypt from 'bcryptjs';
import { validateSignIn } from "../middleware/verifySignIn.js";
import { Role } from "../db/models/roleModel.js";
import jwt from 'jsonwebtoken'
import authConfig from "../db/config/auth.config.js";
import { Favorite } from "../db/models/favoriteModel.js";
import { addFavoriteToUser, getUserWithFavorites } from "../services/favoriteService.js";

const router = Router()

router.post('/signup', validateSignUp, userAlreadyExists, async (req, res) => {
    const body = _.pick(req.body, "userName", "email", "password")
    body.password = await bcrypt.hash(body.password, 12)
    const user = await new User(body);

    try {
        user.roles = [await (await Role.findOne({ name: 'user' }))._id]
        await user.save()
        return res.json({ message: 'User Saved', id: user._id })
    }
    catch (e) {
        return res.status(500).json({ message: "Server db Error", error: e })
    }
})



router.post('/signin', validateSignIn, async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email }).populate<{ roles: Array<typeof Role> }>('roles')

        if (!user) {
            return res.status(401).json({ message: 'No Such User' })
        }

        const isPasswordValid = await bcrypt.compare(
            req.body.password, user.password
        )

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid Credentials' })
        }

        const token = jwt.sign({ id: user.id }, authConfig.secret, { expiresIn: '30d' })

        const authorities = [];
        for (let i = 0; i < user.roles.length; i++) {
            authorities.push(`Role_${user.roles[i].name.toUpperCase()}`)
        }

        return res.status(200).json({
            message: 'Sign in successfull',
            id: user.id,
            userName: user.userName,
            email: user.email,
            roles: authorities,
            accessToken: token
        })
    }

    catch (e) {
        return res.status(500).json({ message: "Server db Error", error: e })
    }
})

/*
משו עם המועדפים, לא בדיוק הבנתי...עפי בינה
router.get('/user/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const userWithFavorites = await getUserWithFavorites(userId);
        return res.json(userWithFavorites);
    } catch (e) {
        return res.status(500).json({ message: "Server db Error", error: e });
    }
});

router.post('/user/:userId/favorite/:favoriteId', async (req, res) => {
    const userId = req.params.userId;
    const favoriteId = req.params.favoriteId;
    try {
        await addFavoriteToUser(userId, favoriteId);
        return res.json({ message: "Favorite added to user successfully" });
    } catch (e) {
        return res.status(500).json({ message: "Server db Error", error: e });
    }
}); */

export { router as usersRouter }