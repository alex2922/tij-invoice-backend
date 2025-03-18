import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import path from "path";
import { checkConnection } from "./db/database.js";
import { createtable } from "./tables/table.js";
import vendorRoutes from "./routes/vendorRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


app.use("/uploads", express.static(path.join("uploads")));

app.use("/vendors", vendorRoutes);

try {
    await checkConnection();
    await createtable();
    const server = http.createServer(app);
    server.listen(8000, () => {
        console.log("Server is running on port 8000");
    });
} catch (error) {
    console.error("Error starting server:", error);
}
