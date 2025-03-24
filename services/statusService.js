import { database } from "../db/database";


export const addStatusService = async (status) => {
    try {
        const query = `INSERT INTO status (name) VALUES (?)`;
        const value = [status.name];
        const [response] = await database.query(query, value);
        return { success: true, message: "service type added successfully", data: response.insertId };
    } catch (error) {
        return { success: false, message: "unable to add service type", data: error.message };
    }
};



export const updateStatusService = async (id, status) => {
    try {
        const query = `UPDATE status SET name = ? WHERE id = ?`;
        const value = [status.name, id];
        const [response] = await database.query(query ,value);
        return {
            success:true, message : " mode of payment name updated", data:response.insertId }
    } catch (error) {
        return { success: false, message:error.message };   
    }
}



export const getAllStatusService = async () => {
    try {
        const [response] = await database.query(`SELECT * FROM status`);
        return response.length ? {success:true, data:response} : { success: false, message: "No data found" };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

export const getStatusByIdService = async (id) => {
    try {
        const [response] = await database.query(`SELECT * FROM status WHERE id = ?`, [id]);
        return response.length ? {success:true, data:response} : { success: false, message: "No data found" };
    } catch (error) {
        return { success: false, message: error.message };
    }
}


export const deleteStatusService = async (id) => {
    try {
        const [response] = await database.query(`DELETE FROM status WHERE id = ?` , [id]);
        return response.affectedRows ? { success: true, message: "Deleted successfully" } : { success: false, message: "ID not found" };
    } catch (error) {
        return { success: false, message: error.message };
    }
}