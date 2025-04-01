import express from 'express';

import { loginUser , addUser } from '../controllers/userController.js';




export const userRoute = express.Router();
userRoute.post("/add" , addUser);
userRoute.post("/login" , loginUser);