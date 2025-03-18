import { database } from "../db/database.js";

export const AddVendor = async (vendor, file) => {
    try {
        const imagePath = file ? `/uploads/${file.filename}` : null;

        const query = `INSERT INTO vendors (name, contact, email, gstnum, image) VALUES (?, ?, ?, ?, ?)`;
        const values = [
            vendor.name,
            vendor.contact,
            vendor.email,
            vendor.gstnum,
            imagePath, 
        ];
        const [response] = await database.query(query, values);
        return {
            success: true,
            message: "Vendor added successfully",
            data: response.insertId,
        };
    } catch (error) {
        return {
            success: false,
            message: "Unable to add vendor",
            data: error.message,
        };
    }
};
