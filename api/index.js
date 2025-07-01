import express from 'express';
import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGOODB_URL)
.then( () => {console.log("MongoDb connected")})
.catch( (error) => {console.log(error)});

app.listen(3000, () => {
    console.log('server is up');
});