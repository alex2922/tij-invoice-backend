import express from "express";
import {addClients, deleteClient, getAllClient, getClientById, updateClient } from "../controllers/clientController.js";




export const clientRoute = express.Router();

clientRoute.post("/add",addClients);
clientRoute.get("/getAll",getAllClient);
clientRoute.get("/getById",getClientById);
clientRoute.put("/update",updateClient);
clientRoute.delete("/delete",deleteClient);


