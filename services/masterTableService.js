import { database } from "../db/database.js";

// Add new master table entry
export const addMasterTableService = async (masterTable) => {
    try {
        const query = `INSERT INTO masterTable (
            journeyDate, bookingDate, invoiceNum, clientName, clientPayment,
            systemReference, portalOfBooking, gstDetails, departureCity,
            arrivalCity, serviceType, netPurchase, markupCommission,
            gst, invoiceAmount, modeOfPayment, netProfit, status
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        const values = [
            masterTable.journeyDate,
            masterTable.bookingDate,
            masterTable.invoiceNum,
            masterTable.clientName,
            masterTable.clientPayment,
            masterTable.systemReference,
            masterTable.portalOfBooking,
            masterTable.gstDetails,
            masterTable.departureCity,
            masterTable.arrivalCity,
            masterTable.serviceType,
            masterTable.netPurchase,
            masterTable.markupCommission,
            masterTable.gst,
            masterTable.invoiceAmount,
            masterTable.modeOfPayment,
            masterTable.netProfit,
            masterTable.status
        ];

        const [response] = await database.query(query, values);
        return { 
            success: true, 
            message: "Master table entry created successfully", 
            data: response.insertId 
        };
    } catch (error) {
        return { 
            success: false, 
            message: "Unable to create master table entry", 
            error: error.message 
        };
    }
};

// Get all master table entries
export const getAllMasterTableService = async () => {
    try {
        const [response] = await database.query('SELECT * FROM masterTable ORDER BY entryCreatedOn DESC');
        return response.length 
            ? { success: true, data: response }
            : { success: false, message: "No entries found" };
    } catch (error) {
        return { 
            success: false, 
            message: "Unable to fetch master table entries", 
            error: error.message 
        };
    }
};

// Get master table entry by ID
export const getMasterTableByIdService = async (id) => {
    try {
        const [response] = await database.query('SELECT * FROM masterTable WHERE id = ?', [id]);
        return response.length 
            ? { success: true, data: response[0] }
            : { success: false, message: "Entry not found" };
    } catch (error) {
        return { 
            success: false, 
            message: "Unable to fetch master table entry", 
            error: error.message 
        };
    }
};

// Update master table entry
export const updateMasterTableService = async (id, masterTable) => {
    try {
        const query = `UPDATE masterTable SET 
            journeyDate = ?, 
            bookingDate = ?, 
            invoiceNum = ?, 
            clientName = ?, 
            clientPayment = ?,
            systemReference = ?, 
            portalOfBooking = ?, 
            gstDetails = ?, 
            departureCity = ?,
            arrivalCity = ?, 
            serviceType = ?, 
            netPurchase = ?, 
            markupCommission = ?,
            gst = ?, 
            invoiceAmount = ?, 
            modeOfPayment = ?, 
            netProfit = ?, 
            status = ?
        WHERE id = ?`;

        const values = [
            masterTable.journeyDate,
            masterTable.bookingDate,
            masterTable.invoiceNum,
            masterTable.clientName,
            masterTable.clientPayment,
            masterTable.systemReference,
            masterTable.portalOfBooking,
            masterTable.gstDetails,
            masterTable.departureCity,
            masterTable.arrivalCity,
            masterTable.serviceType,
            masterTable.netPurchase,
            masterTable.markupCommission,
            masterTable.gst,
            masterTable.invoiceAmount,
            masterTable.modeOfPayment,
            masterTable.netProfit,
            masterTable.status,
            id
        ];

        const [response] = await database.query(query, values);
        return response.affectedRows 
            ? { success: true, message: "Entry updated successfully" }
            : { success: false, message: "Entry not found" };
    } catch (error) {
        return { 
            success: false, 
            message: "Unable to update master table entry", 
            error: error.message 
        };
    }
};

// Delete master table entry
export const deleteMasterTableService = async (id) => {
    try {
        const [response] = await database.query('DELETE FROM masterTable WHERE id = ?', [id]);
        return response.affectedRows 
            ? { success: true, message: "Entry deleted successfully" }
            : { success: false, message: "Entry not found" };
    } catch (error) {
        return { 
            success: false, 
            message: "Unable to delete master table entry", 
            error: error.message 
        };
    }
};


