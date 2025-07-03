import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGOODB_URL)
.then( () => {console.log("MongoDb connected")})
.catch( (error) => {console.log(error)});

app.listen(process.env.PORT, () => {
    console.log(`server is up - http://localhost:${process.env.PORT}`);
});

app.use("/user", userRouter);