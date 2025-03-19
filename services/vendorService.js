import { database } from "../db/database.js";

// CREATE (Add Vendor)

export const AddVendor = async (vendor) => {
    try {
        const query = `INSERT INTO vendors (name, contact, email, gstnum ) VALUES (?, ?, ?, ?)`;
        const value = [vendor.name, vendor.contact, vendor.email, vendor.gstnum];
        const [reponse] = await database.query(query, value);
        return { success: true, message: "vendor added successfully", data: reponse.insertId };
    } catch (error) {
        return { success: false, message: "unable to add vendor", data: error.message };
    }
};


export const updateVendorDetails = async (id, vendor) => {
    try {
        const query = `UPDATE vendors 
            SET name = ?, contact = ?, email = ?, gstnum = ? 
            WHERE id = ?`;
        const values = [vendor.name, vendor.contact, vendor.email, vendor.gstnum, id];

        const [response] = await database.query(query, values);

        return {
            success: true,
            message: "updated",
            data: response.insertId,    
        };
    } catch (err) {
        return {
            success: false,
            message: err.message,
        };
    }
};