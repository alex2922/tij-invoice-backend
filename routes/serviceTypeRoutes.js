import express from "express";
import { addServiceType, deleteServiceType, getAllServiceType, getServiceTypeById, updateServiceType } from "../controllers/serviceTypeController.js";

export const serviceTypeRoute = express.Router();

// Create new service type
serviceTypeRoute.post("/add", addServiceType);

// Get all service types
serviceTypeRoute.get("/getAll", getAllServiceType);

// Get service type by ID
serviceTypeRoute.get("/getById", getServiceTypeById);

// Update service type
serviceTypeRoute.put("/update", updateServiceType);

// Delete service type
serviceTypeRoute.delete("/delete", deleteServiceType);