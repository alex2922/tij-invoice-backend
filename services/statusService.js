import { database } from "../db/database.js";

// Add new status
export const addStatusService = async (status) => {
    try {
        const query = `INSERT INTO status (name) VALUES (?)`;
        const values = [status.name];
        const [response] = await database.query(query, values);
        return {
            success: true,
            message: "Status added successfully",
            data: response.insertId
        };
    } catch (error) {
        return {
            success: false,
            message: "Unable to add status",
            error: error.message
        };
    }
};

// Get all statuses
export const getAllStatusService = async () => {
    try {
        const [response] = await database.query('SELECT * FROM status ORDER BY id');
        return response.length
            ? { success: true, data: response }
            : { success: false, message: "No statuses found" };
    } catch (error) {
        return {
            success: false,
            message: "Unable to fetch statuses",
            error: error.message
        };
    }
};

// Get status by ID
export const getStatusByIdService = async (id) => {
    try {
        const [response] = await database.query('SELECT * FROM status WHERE id = ?', [id]);
        return response.length
            ? { success: true, data: response[0] }
            : { success: false, message: "Status not found" };
    } catch (error) {
        return {
            success: false,
            message: "Unable to fetch status",
            error: error.message
        };
    }
};

// Update status
export const updateStatusService = async (id, status) => {
    try {
        const query = 'UPDATE status SET name = ? WHERE id = ?';
        const values = [status.name, id];
        const [response] = await database.query(query, values);
        return response.affectedRows
            ? { success: true, message: "Status updated successfully" }
            : { success: false, message: "Status not found" };
    } catch (error) {
        return {
            success: false,
            message: "Unable to update status",
            error: error.message
        };
    }
};

// Delete status
export const deleteStatusService = async (id) => {
    try {
        const [response] = await database.query('DELETE FROM status WHERE id = ?', [id]);
        return response.affectedRows
            ? { success: true, message: "Status deleted successfully" }
            : { success: false, message: "Status not found" };
    } catch (error) {
        return {
            success: false,
            message: "Unable to delete status",
            error: error.message
        };
    }
};