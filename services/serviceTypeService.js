import { database } from "../db/database.js";

// Add new service type
export const addServiceTypeService = async (serviceType) => {
    try {
        const query = `INSERT INTO ServiceType (name) VALUES (?)`;
        const values = [serviceType.name];
        const [response] = await database.query(query, values);
        return {
            success: true,
            message: "Service type added successfully",
            data: response.insertId
        };
    } catch (error) {
        return {
            success: false,
            message: "Unable to add service type",
            error: error.message
        };
    }
};

// Get all service types
export const getAllServiceTypeService = async () => {
    try {
        const [response] = await database.query('SELECT * FROM ServiceType ORDER BY id');
        return response.length
            ? { success: true, data: response }
            : { success: false, message: "No service types found" };
    } catch (error) {
        return {
            success: false,
            message: "Unable to fetch service types",
            error: error.message
        };
    }
};

// Get service type by ID
export const getServiceTypeByIdService = async (id) => {
    try {
        const [response] = await database.query('SELECT * FROM ServiceType WHERE id = ?', [id]);
        return response.length
            ? { success: true, data: response[0] }
            : { success: false, message: "Service type not found" };
    } catch (error) {
        return {
            success: false,
            message: "Unable to fetch service type",
            error: error.message
        };
    }
};

// Update service type
export const updateServiceTypeService = async (id, serviceType) => {
    try {
        const query = 'UPDATE ServiceType SET name = ? WHERE id = ?';
        const values = [serviceType.name, id];
        const [response] = await database.query(query, values);
        return response.affectedRows
            ? { success: true, message: "Service type updated successfully" }
            : { success: false, message: "Service type not found" };
    } catch (error) {
        return {
            success: false,
            message: "Unable to update service type",
            error: error.message
        };
    }
};

// Delete service type
export const deleteServiceTypeService = async (id) => {
    try {
        const [response] = await database.query('DELETE FROM ServiceType WHERE id = ?', [id]);
        return response.affectedRows
            ? { success: true, message: "Service type deleted successfully" }
            : { success: false, message: "Service type not found" };
    } catch (error) {
        return {
            success: false,
            message: "Unable to delete service type",
            error: error.message
        };
    }
};