import { database } from "../db/database.js";
import bcrypt from "bcrypt";


export const addUserService = async (user) => {
    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const query=`INSERT INTO user (name, email, password) VALUES (?, ?, ?)`;
        const values = [user.name, user.email, hashedPassword];
        const [response] = await database.query(query, values);
        return {success: true, message: "User added successfully", data: response.insertId};

    } catch (error) {
        return {success: false, message: "Unable to add user", data: error.message};
    }
}

