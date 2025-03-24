import { addMasterTableService, deleteMasterTableService, getAllMasterTableService, getMasterTableByIdService, updateMasterTableService } from "../services/masterTableService.js";
import { masterTableModel } from "../models/masterTableModel.js";

// Create new master table entry
export const addMasterTable = async (req, res) => {
    try {
        const {
            journeyDate,
            bookingDate,
            invoiceNum,
            clientName,
            clientPayment,
            systemReference,
            portalOfBooking,
            gstDetails,
            pnr,
            departureCity,
            arrivalCity,
            serviceType,
            netPurchase,
            markupCommission,
            gst,
            invoiceAmount,
            modeOfPayment,
            netProfit,
            status,
            refundDate,
            refundAmount,
            refundMode,
        } = req.body;

        // Validate required fields
        if (!journeyDate || !bookingDate || !invoiceNum || !clientName || !clientPayment || 
            !systemReference || !portalOfBooking || !gstDetails || !pnr || !departureCity || 
            !arrivalCity || !serviceType || !netPurchase || !markupCommission || 
            !gst || !invoiceAmount || !modeOfPayment || !netProfit || !status || !refundDate || !refundAmount || !refundMode) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const data = new masterTableModel({
            journeyDate,
            bookingDate,
            invoiceNum,
            clientName,
            clientPayment,
            systemReference,
            portalOfBooking,
            gstDetails,
            pnr,
            departureCity,
            arrivalCity,
            serviceType,
            netPurchase,
            markupCommission,
            gst,
            invoiceAmount,
            modeOfPayment,
            netProfit,
            status,
            refundDate,
            refundAmount,
            refundMode
        });

        const response = await addMasterTableService(data);
        res.status(response.success ? 201 : 400).json(response);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all master table entries
export const getAllMasterTable = async (req, res) => {
    try {
        const response = await getAllMasterTableService();
        res.status(response.success ? 200 : 400).json(response);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get master table entry by ID
export const getMasterTableById = async (req, res) => {
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }
        const response = await getMasterTableByIdService(id);
        res.status(response.success ? 200 : 400).json(response);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update master table entry
export const updateMasterTable = async (req, res) => {
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }

        const {
            journeyDate,
            bookingDate,
            invoiceNum,
            clientName,
            clientPayment,
            systemReference,
            portalOfBooking,
            gstDetails,
            pnr,
            departureCity,
            arrivalCity,
            serviceType,
            netPurchase,
            markupCommission,
            gst,
            invoiceAmount,
            modeOfPayment,
            netProfit,
            status,
            refundDate,
            refundAmount,
            refundMode
        } = req.body;

        // Validate required fields
        if (!journeyDate || !bookingDate || !invoiceNum || !clientName || !clientPayment || 
            !systemReference || !portalOfBooking || !gstDetails || !pnr || !departureCity || 
            !arrivalCity || !serviceType || !netPurchase || !markupCommission || 
            !gst || !invoiceAmount || !modeOfPayment || !netProfit || !status || !refundDate || !refundAmount || !refundMode) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const data = new masterTableModel({
            journeyDate,
            bookingDate,
            invoiceNum,
            clientName,
            clientPayment,
            systemReference,
            portalOfBooking,
            gstDetails,
            pnr,
            departureCity,
            arrivalCity,
            serviceType,
            netPurchase,
            markupCommission,
            gst,
            invoiceAmount,
            modeOfPayment,
            netProfit,
            status,
            refundDate,
            refundAmount,
            refundMode
        });

        const response = await updateMasterTableService(id, data);
        res.status(response.success ? 200 : 400).json(response);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete master table entry
export const deleteMasterTable = async (req, res) => {
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }
        const response = await deleteMasterTableService(id);
        res.status(response.success ? 200 : 400).json(response);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}; 