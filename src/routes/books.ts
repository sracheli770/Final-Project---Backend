import { Router } from "express";
import { isAdmin } from "../middleware/isAdmin.js";
import { validateToken } from "../middleware/validateToken.js";

const router = Router()

//רק משתמש מחובר יכול לראות את כל הספרים
router.get("/all", validateToken, (req, res) => {
    res.json([{ title: "Hunger Games" }]);
});

//רק אדמין יכול לראות ספרי פנטזיה
router.get("/fantasy", validateToken, isAdmin, (req, res) => {
    res.json([{ title: "Harry Potter" }]);
});

//רק מודרטור יכול לראות ספרי פנטזיה
router.get("/mod", validateToken, (req, res) => {
    res.json([{ title: "Harry Potter" }]);
});

// router.post('/books', (req, res)=>{})
// router.delete('/books', (req, res)=>{})

export { router as booksRouter }