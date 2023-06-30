import express from 'express';
import morgan from 'morgan';
import { connect } from './db/connect.js';
import { notFound } from './middleware/not-found.js';
import { login } from './controllers/user-controller.js';
import { cardsRouter } from './routes/bsCards.js';
import cors from 'cors';
import { usersRouter } from './routes/users.js';
import { booksRouter } from './routes/books.js';
import { niggunsRouter } from './routes/nigguns.js';
const app = express();
connect().catch(e => console.log(e));
//middleware
app.use(cors({
    origin: "http://localhost:3000",
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());
app.use(morgan('dev'));
app.get('/home', (req, res) => {
    res.json({ message: 'Home Page' });
});
app.get('/api/login', login);
//routes
app.use('/api/cards', cardsRouter);
app.use('/users', usersRouter);
app.use('/api/books', booksRouter);
app.use('api/nigguns', niggunsRouter);
//404
app.use(notFound);
const PORT = 3001;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
