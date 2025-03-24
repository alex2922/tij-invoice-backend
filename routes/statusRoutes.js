import express from 'express';
import { addStatus, deleteStatus, getAllStatus, getStatusById, updateStatus } from '../controllers/statusController.js';

export const statusRoute = express.Router();

// Create new status
statusRoute.post("/add", addStatus);

// Get all statuses
statusRoute.get("/getAll", getAllStatus);

// Get status by ID
statusRoute.get("/getById", getStatusById);

// Update status
statusRoute.put("/update", updateStatus);

// Delete status
statusRoute.delete("/delete", deleteStatus);
