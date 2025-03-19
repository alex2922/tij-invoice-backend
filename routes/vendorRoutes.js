import  express  from 'express';
import { addVendors, deleteVendor ,updateVendor ,getVendorById, getAllVendor} from '../controllers/vendorController.js';




export const vendorRoute = express.Router();
vendorRoute.post("/addVendor",addVendors);
vendorRoute.get("/getAllVendor",getAllVendor);
vendorRoute.get("/getVendorById",getVendorById);
vendorRoute.put("/updateVendor",updateVendor);
vendorRoute.delete("/deleteVendor",deleteVendor);

