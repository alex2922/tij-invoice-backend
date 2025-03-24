import  express  from 'express';
import { addModeOfPayment, deleteModeOfPayment ,updateModeOfPayment ,getModeOfPaymentById, getAllModeOfPayment} from '../controllers/modeOfPaymentController.js';





export const modeOfPaymentRoute = express.Router();
modeOfPaymentRoute.post("/add",addModeOfPayment);
modeOfPaymentRoute.get("/getAll",getAllModeOfPayment);
modeOfPaymentRoute.get("/getById",getModeOfPaymentById);
modeOfPaymentRoute.put("/update",updateModeOfPayment);
modeOfPaymentRoute.delete("/delete",deleteModeOfPayment);