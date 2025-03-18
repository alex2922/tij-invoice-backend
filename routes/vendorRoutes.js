import express from "express";
import { addVendor, upload } from "../controllers/vendorController.js";

const router = express.Router();

// Upload vendor with file storage on VPS
router.post("/add", upload.single("image"), addVendor);

export default router;
