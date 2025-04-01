import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";

import { checkConnection } from "./db/database.js";
import { createtable } from "./tables/table.js";
import { clientRoute } from "./routes/clientRoutes.js";
import { vendorRoute } from './routes/vendorRoutes.js';
import { modeOfPaymentRoute } from './routes/modeOfPaymentRoute.js';
import { masterTableRoute } from './routes/masterTableRoutes.js';
import { serviceTypeRoute } from './routes/serviceTypeRoutes.js';
import { statusRoute } from './routes/statusRoutes.js';
import { userRoute } from './routes/userRoutes.js';


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/client",clientRoute);
app.use("/vendor",vendorRoute);
app.use("/modeOfPayment",modeOfPaymentRoute);
app.use("/masterTable",masterTableRoute);
app.use("/service",serviceTypeRoute);
app.use("/status",statusRoute);
app.use("/user",userRoute)




try {
    await checkConnection();
    await createtable();
    const server = http.createServer(app);
    server.listen(500, () => {
        console.log("Server is running");
    });
} catch (error) {
    console.error("Error starting server:", error);
}
