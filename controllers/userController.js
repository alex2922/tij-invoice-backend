import {addUserService} from "../services/userService.js"
import  {userModel} from "../models/userModel.js"
import { database } from "../db/database.js";
import bcrypt  from 'bcrypt';
import dotenv from 'dotenv';
import jwt  from 'jsonwebtoken';


dotenv.config();

export const addUser = async (req, res) => {
    try {
       const {name , email , password} = req.body;
       if(!name || !email || !password) {
        return res.status(400).json({messafe: "All fields are required"});
       }

       const data = new userModel({name , email , password})
       const response = await addUserService(data)
       res.status(response.success ? 201:400).json(response);



    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


export const loginUser = async (req, res) => {
    try {
       const {email, password} = req.body;
       if (!email || !password){
        return res.status(400).json({messafe: "All fields are required"});
       }

       const [extUser] = await database.query(`SELECT * FROM user WHERE email = ?`,[email] )
       console.log(extUser);

       if (!extUser){
        return res.status(400).json({messafe: "user not found"});
       }

       const user = extUser[0];

       const comparePass = await bcrypt.compare(password , user.password);
       console.log("password" , user.password);
       console.log("password" , comparePass);

       if (!comparePass){
        return res.status(400).json({messafe: "invalid password"});
       }

       const token = jwt.sign({
        id: user.id
       },
       process.env.JWT_SECRET , {
        expiresIn:"1d"
       }
    )

    res.status(201).json({
        message:"login Successfully",
        token: token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}