import { addModeOfPaymentService, deleteModeOfPaymentService, getAllModeOfPaymentService, getModeOfPaymentByIdService, updateModeOfPaymentService } from "../services/modeOfPaymentService.js";
import { modeOfPaymentModel } from "../models/modeOfPaymentModel.js";



export const addModeOfPayment = async (req, res) => {
    try {
        const {name} = req.body;
        if (!name){
            return res.status(400).json({message:"All Fields are required"});
        }
        const data = new modeOfPaymentModel({name});
        const response = await addModeOfPaymentService(data);
        if (response.success) {
            res.status(200).json(response);
        } else {
            res.status(400).json(response);
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}




export const updateModeOfPayment = async (req, res) => {
    try {
        const { id } = req.query;
        const {name} = req.body;
        if (!name){
            return res.status(400).json({message:"All Fields are required"});
        }
        const data = new modeOfPaymentModel({name});
        const response = await updateModeOfPaymentService(id ,data);
        if (response.success) {
            res.status(200).json(response);
        } else {
            res.status(400).json(response);
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}


export const getAllModeOfPayment = async (req, res) => {
    try {
        const response = await getAllModeOfPaymentService();
        res.status(response.success ? 200 : 400).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getModeOfPaymentById = async (req, res) => {
    try {
        const { id } = req.query;
        const response = await getModeOfPaymentByIdService(id);
        res.status(response.success ? 200 : 400).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteModeOfPayment = async (req, res) => {
    try {
        const { id } = req.query;
        const response = await deleteModeOfPaymentService(id);
        res.status(response.success ? 200 : 400).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};