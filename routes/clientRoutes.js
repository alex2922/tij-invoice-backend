import express from "express";
import {addClients, deleteClient, getAllClient, getClientById, updateClient } from "../controllers/clientController.js";




export const clientRoute = express.Router();

clientRoute.post("/addClients",addClients);
clientRoute.get("/getAllClient",getAllClient);
clientRoute.get("/getClientById",getClientById);
clientRoute.put("/updateClient",updateClient);
clientRoute.delete("/deleteClient",deleteClient);


