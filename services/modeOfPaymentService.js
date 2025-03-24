import { database } from "../db/database.js";



export const addModeOfPaymentService = async (paymentMode) => {
    try {
        const query = `INSERT INTO modeOfPayment (name) VALUES (?)`;
        const value = [paymentMode.name];
        const [response] = await database.query(query , value);
        return {success: true, message: "mode of payment added successfully.", data: response.insertId }
    } catch (error) {
        return { success: false, message: "unable to mode of payment", data: error.message };
    }
}



export const updateModeOfPaymentService = async (id, paymentMode) => {
    try {
        const query = `UPDATE modeOfPayment SET name = ? WHERE id = ?`;
        const value = [paymentMode.name, id];
        const [response] = await database.query(query ,value);
        return {
            success:true, message : " mode of payment name updated", data:response.insertId }
    } catch (error) {
        return { success: false, message:error.message };   
    }
}



export const getAllModeOfPaymentService = async () => {
    try {
        const [response] = await database.query(`SELECT * FROM modeOfPayment`);
        return response.length ? {success:true, data:response} : { success: false, message: "No data found" };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

export const getModeOfPaymentByIdService = async (id) => {
    try {
        const [response] = await database.query(`SELECT * FROM modeOfPayment WHERE id = ?`, [id]);
        return response.length ? {success:true, data:response} : { success: false, message: "No data found" };
    } catch (error) {
        return { success: false, message: error.message };
    }
}


export const deleteModeOfPaymentService = async (id) => {
    try {
        const [response] = await database.query(`DELETE FROM modeOfPayment WHERE id = ?` , [id]);
        return response.affectedRows ? { success: true, message: "Deleted successfully" } : { success: false, message: "ID not found" };
    } catch (error) {
        return { success: false, message: error.message };
    }
}