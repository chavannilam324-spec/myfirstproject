import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import UserRouter from './Routes/UserRoutes.js';
import ItemRouter from './Routes/ItemRoutes.js';
import path from 'path';

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 2000;
const URL = process.env.MONGOURL;

mongoose.connect("mongodb+srv://nilam:nilam123@cluster0.tau6edk.mongodb.net/?appName=Cluster0").then(() => {
  console.log("DB connected successfully");
  app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
  });
}).catch(error => console.log(error));

app.use('/api/users', UserRouter);
app.use('/api/uploads', express.static(path.join(process.cwd(), "uploads")));
app.use('/item', ItemRouter);