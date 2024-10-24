import express, { Application, Request, Response, NextFunction } from 'express';
import connectDB from './db';
import cors from 'cors';

import errorHandler from './app/middlewares/global.error';


const app: Application = express();
const PORT = process.env.PORT || 4040;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
connectDB();


// Route
app.get('/', (req:Request, res:Response) => {
    console.log("hit on /")
    res.json({ message: 'Hello World' });
})

app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
export default app;