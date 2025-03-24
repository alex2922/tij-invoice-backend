import express from "express";
import { addMasterTable, deleteMasterTable ,updateMasterTable ,getMasterTableById, getAllMasterTable} from "../controllers/masterTableController.js";




export const masterTableRoute = express.Router();
masterTableRoute.post("/add",addMasterTable);
masterTableRoute.get("/getAll",getAllMasterTable);
masterTableRoute.get("/getById",getMasterTableById);
masterTableRoute.put("/update",updateMasterTable);
masterTableRoute.delete("/delete",deleteMasterTable);