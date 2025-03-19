import { database } from "../db/database.js";
import { vendorModel } from "./../models/vendorModel.js";
import { AddVendor, updateVendorDetails } from "./../services/vendorService.js";

export const addVendors = async (req, res) => {
    try {
        const { name, contact, email, gstnum } = req.body;
        if (!name || !contact || !email) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const data = new vendorModel({ name, contact, email, gstnum });
        const response = await AddVendor(data);
        if (response.success) {
            res.status(200).json(response);
        } else {
            res.status(400).json(response);
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const getAllVendor = async (req, res) => {
    try {
        const [response] = await database.query(`SELECT * FROM vendors `);
        if (response.length === 0) {
            res.status(400).json({
                message: "data not found",
            });
        }
        res.status(201).json({
            status: "success",
            data: response,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            data: error.message,
        });
    }
};

export const getVendorById = async (req, res) => {
    try {
        const { id } = req.query;
        if (!id) {
            res.status(401).json({
                message: "id required",
            });
        }
        const [response] = await database.query(
            `SELECT * FROM vendors WHERE id =?`,
            [id]
        );
        if (response.length === 0) {
            res.status(400).json({
                message: "data not found",
            });
        }
        res.status(200).json({
            message: "success",
            data: response,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: "error",
        });
    }
};

export const deleteVendor = async (req, res) => {
    try {
        const { id } = req.query;
        const [response] = await database.query(
            `DELETE FROM vendors WHERE id = ?`,
            [id]
        );
        if (response.affectedRows === 0) {
            res.status(401).json({
                mesaage: "id not found",
            });
        }
        res.status(201).json({
            message: "deleteed successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.mesaage,
            status: "error",
        });
    }
};

export const updateVendor = async (req, res) => {
    try {
        const { id } = req.query;
        const { name, contact, email, gstnum } = req.body;

        if (!id || !name || !contact || !email ) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const updateVendors = new vendorModel({ name, contact, email, gstnum });
        const response = await updateVendorDetails(id, updateVendors);

        if (response.success) {
            res.status(200).json(response);
        } else {
            res.status(400).json(response);
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
};
