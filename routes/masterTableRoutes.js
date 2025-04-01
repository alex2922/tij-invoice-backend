import express from "express";
import { addMasterTable, deleteMasterTable ,updateMasterTable ,getMasterTableById, getAllMasterTable} from "../controllers/masterTableController.js";
import { verifyToken } from "../token.js";




export const masterTableRoute = express.Router();
masterTableRoute.post("/add",addMasterTable);
masterTableRoute.get("/getAll",verifyToken ,getAllMasterTable);
masterTableRoute.get("/getById",getMasterTableById);
masterTableRoute.put("/update", verifyToken, updateMasterTable);
masterTableRoute.delete("/delete",deleteMasterTable);