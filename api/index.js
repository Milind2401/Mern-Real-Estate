import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.Mongo;

mongoose.connect(uri, {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});
const app=express();

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});