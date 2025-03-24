import { addServiceTypeService, deleteServiceTypeService, getAllServiceTypeService, getServiceTypeByIdService, updateServiceTypeService } from "../services/serviceTypeService.js";
import { serviceTypeModel } from "../models/serviceTypeModel.js";

// Create new service type
export const addServiceType = async (req, res) => {
    try {
        const { name } = req.body;

        // Validate required fields
        if (!name) {
            return res.status(400).json({ message: "Service type name is required" });
        }

        const data = new serviceTypeModel({ name });
        const response = await addServiceTypeService(data);
        res.status(response.success ? 201 : 400).json(response);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all service types
export const getAllServiceType = async (req, res) => {
    try {
        const response = await getAllServiceTypeService();
        res.status(response.success ? 200 : 400).json(response);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get service type by ID
export const getServiceTypeById = async (req, res) => {
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }
        const response = await getServiceTypeByIdService(id);
        res.status(response.success ? 200 : 400).json(response);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update service type
export const updateServiceType = async (req, res) => {
    try {
        const { id } = req.query;
        const { name } = req.body;

        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }
        if (!name) {
            return res.status(400).json({ message: "Service type name is required" });
        }

        const data = new serviceTypeModel({ name });
        const response = await updateServiceTypeService(id, data);
        res.status(response.success ? 200 : 400).json(response);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete service type
export const deleteServiceType = async (req, res) => {
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }
        const response = await deleteServiceTypeService(id);
        res.status(response.success ? 200 : 400).json(response);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
