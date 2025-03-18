import express from "express";
import { addVendor, upload } from "../controllers/vendorController.js";

const router = express.Router();

// Route for adding vendor with image upload
router.post("/add", upload.single("image"), addVendor);

export default router;
