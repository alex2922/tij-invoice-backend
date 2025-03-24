import { database } from "../db/database";


export const addServiceTypeService = async (serviceType) => {
    try {
        const query = `INSERT INTO ServiceType (name) VALUES (?)`;
        const value = [serviceType.name];
        const [response] = await database.query(query, value);
        return { success: true, message: "service type added successfully", data: response.insertId };
    } catch (error) {
        return { success: false, message: "unable to add service type", data: error.message };
    }
};



export const updateServiceTypeService = async (id, serviceType) => {
    try {
        const query = `UPDATE ServiceType SET name = ? WHERE id = ?`;
        const value = [serviceType.name, id];
        const [response] = await database.query(query ,value);
        return {
            success:true, message : " mode of payment name updated", data:response.insertId }
    } catch (error) {
        return { success: false, message:error.message };   
    }
}



export const getAllServiceTypeService = async () => {
    try {
        const [response] = await database.query(`SELECT * FROM ServiceType`);
        return response.length ? {success:true, data:response} : { success: false, message: "No data found" };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

export const getServiceTypeByIdService = async (id) => {
    try {
        const [response] = await database.query(`SELECT * FROM ServiceType WHERE id = ?`, [id]);
        return response.length ? {success:true, data:response} : { success: false, message: "No data found" };
    } catch (error) {
        return { success: false, message: error.message };
    }
}


export const deleteServiceTypeService = async (id) => {
    try {
        const [response] = await database.query(`DELETE FROM ServiceType WHERE id = ?` , [id]);
        return response.affectedRows ? { success: true, message: "Deleted successfully" } : { success: false, message: "ID not found" };
    } catch (error) {
        return { success: false, message: error.message };
    }
}