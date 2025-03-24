import { addStatusService, deleteStatusService, getAllStatusService, getStatusByIdService, updateStatusService } from "../services/statusService.js";
import { statusModel } from "../models/statusModel.js";

// Create new status
export const addStatus = async (req, res) => {
    try {
        const { name } = req.body;

        // Validate required fields
        if (!name) {
            return res.status(400).json({ message: "Status name is required" });
        }

        const data = new statusModel({ name });
        const response = await addStatusService(data);
        res.status(response.success ? 201 : 400).json(response);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all statuses
export const getAllStatus = async (req, res) => {
    try {
        const response = await getAllStatusService();
        res.status(response.success ? 200 : 400).json(response);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get status by ID
export const getStatusById = async (req, res) => {
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }
        const response = await getStatusByIdService(id);
        res.status(response.success ? 200 : 400).json(response);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update status
export const updateStatus = async (req, res) => {
    try {
        const { id } = req.query;
        const { name } = req.body;

        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }
        if (!name) {
            return res.status(400).json({ message: "Status name is required" });
        }

        const data = new statusModel({ name });
        const response = await updateStatusService(id, data);
        res.status(response.success ? 200 : 400).json(response);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete status
export const deleteStatus = async (req, res) => {
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }
        const response = await deleteStatusService(id);
        res.status(response.success ? 200 : 400).json(response);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
