import  express  from 'express';
import { addVendors, deleteVendor ,updateVendor ,getVendorById, getAllVendor} from '../controllers/vendorController.js';




export const vendorRoute = express.Router();
vendorRoute.post("/add",addVendors);
vendorRoute.get("/getAll",getAllVendor);
vendorRoute.get("/getById",getVendorById);
vendorRoute.put("/update",updateVendor);
vendorRoute.delete("/delete",deleteVendor);

