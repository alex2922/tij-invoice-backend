import { database } from "../db/database.js";
import { clientModel } from "../models/clientsModel.js";
import { AddClients, updateClients } from './../services/clientService.js';




export const addClients = async (req, res) => {
    try {
        const { name, contact, email, gstnum, address } = req.body;
        if (!name || !contact || !email || !address) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const data = new clientModel({ name, contact, email, gstnum, address });
        const response = await AddClients(data);
        if (response.success) {
            res.status(200).json(response);
        } else {
            res.status(400).json(response);
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}



export const updateClient = async (req, res) => {
    try {
        const { id } = req.query;
        const { name, contact, email, gstnum, address } = req.body;

        if (!id || !name || !contact || !email || !address) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const updatedClient = new clientModel({ name, contact, email, gstnum, address });
        const response = await updateClients(id, updatedClient);

        if (response.success) {
            res.status(200).json(response);
        } else {
            res.status(400).json(response);
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
};


export const getAllClient = async (req, res) => {
    try {
        const [response] = await database.query(`SELECT * FROM clients `);

        if (response.length === 0) {
            res.status(400).json({
                message: "data not found"
            })
        }

        res.status(201).json({
            status: "success",
            data: response
        }

        )
    } catch (error) {
        res.status(500).json({
            status: "error",
            data: error.message
        }

        )
    }
}

export const getClientById = async (req, res) => {
    try {
        const { id } = req.query;

        if (!id) {
            res.status(401).json({
                message: "id required"
            })
        }

        const [response] = await database.query(`SELECT * FROM clients WHERE id =?`, [id]);

        if (response.length === 0) {
            res.status(400).json({
                message: "data not found"
            })
        }

        res.status(200).json({
            message: "success",
            data: response
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: "error"
        })
    }
}



export const deleteClient = async (req,res)=>{
    try {
        const {id} = req.query;

        const [response] = await database.query(`DELETE FROM clients WHERE id = ?`,[id]);

        if(response.affectedRows === 0){
            res.status(401).json({
                mesaage:"id not found"
            })
        }

        res.status(201).json({
            message:"deleteed successfully"
        })
    } catch (error) {
        res.status(500).json({
            message:error.mesaage,
            status:"error"
        })
    }
}