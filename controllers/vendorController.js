import { AddVendor } from "../services/vendorService.js";
import multer from "multer";
import path from "path";
import fs from "fs";

// Create an uploads directory if it doesn't exist
const uploadDir = path.join("uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Storage Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // Store files in uploads folder
    },
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        const fileExtension = path.extname(file.originalname);
        cb(null, `${timestamp}_tij_invoice${fileExtension}`);
    }
});

const upload = multer({ storage });

export const addVendor = async (req, res) => {
    try {
        const { name, contact, email, gstnum } = req.body;
        const imagePath = req.file ? `/var/www/images/tij-invoice/${req.file.filename}` : null; // Relative path

        if (!name || !contact || !email) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const vendorData = { name, contact, email, gstnum, image: imagePath };
        const response = await AddVendor(vendorData);

        if (response.success) {
            res.status(201).json(response);
        } else {
            res.status(400).json(response);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { upload };
