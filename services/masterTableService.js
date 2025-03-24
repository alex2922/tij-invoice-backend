import { database } from "../db/database";




export const addMasterTableService = async (masterTable) => {
    try {
        const query = `INSERT INTO masterTable (entryCreatedOn, journeyDate, bookingDate, invoiceNum, clientName, clientPayment, syetemReference, portalOfBooking, gsetDetails, departureCity, arrivalCity, serviceType, netPurchase, markupCommission, gst, invoiceAmount, modeOfPayment, netProfit, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        const value = [masterTable.entryCreatedOn, masterTable.journeyDate, masterTable.bookingDate, masterTable.invoiceNum, masterTable.clientName, masterTable.clientPayment, masterTable.syetemReference, masterTable.portalOfBooking, masterTable.gsetDetails, masterTable.departureCity, masterTable.arrivalCity, masterTable.serviceType, masterTable.netPurchase, masterTable.markupCommission, masterTable.gst, masterTable.invoiceAmount, masterTable.modeOfPayment, masterTable.netProfit, masterTable.status]
        const [response] = await database.query(query, value);
        return {success: true, message: "master table added successfully.", data: response.insertId }
    } catch (error) {
        return { success: false, message: "unable to add master table", data: error.message };
    }
}

export const updateMasterTableService = async (id, masterTable) => {
    try {
        const query = `UPDATE masterTable SET entryCreatedOn = ?, journeyDate = ?, bookingDate = ?, invoiceNum = ?, clientName = ?, clientPayment = ?, syetemReference = ?, portalOfBooking = ?, gsetDetails = ?, departureCity = ?, arrivalCity = ?, serviceType = ?, netPurchase = ?, markupCommission = ?, gst = ?, invoiceAmount = ?, modeOfPayment = ?, netProfit = ?, status = ? WHERE id = ?`
        const value = [masterTable.entryCreatedOn, masterTable.journeyDate, masterTable.bookingDate, masterTable.invoiceNum, masterTable.clientName, masterTable.clientPayment, masterTable.syetemReference, masterTable.portalOfBooking, masterTable.gsetDetails, masterTable.departureCity, masterTable.arrivalCity, masterTable.serviceType, masterTable.netPurchase, masterTable.markupCommission, masterTable.gst, masterTable.invoiceAmount, masterTable.modeOfPayment, masterTable.netProfit, masterTable.status, id]
        const [response] = await database.query(query, value);
        return {success: true, message: "master table updated successfully.", data: response.insertId }
    } catch (error) {
        return { success: false, message: "unable to update master table", data: error.message };
    }
}

export const getAllMasterTableService = async () => {
    try {
        const [response] = await database.query(`SELECT * FROM masterTable`);
        return response.length ? {success: true, data: response} : { success: false, message: "No data found" };
    } catch (error) {
        return { success: false, message: error.message };
    }
}


export const getMasterTableByIdService = async (id) => {
    try {
        const [response] = await database.query(`SELECT * FROM masterTable WHERE id = ?`, [id]);
        return response.length ? {success: true, data: response} : { success: false, message: "No data found" };
    } catch (error) {
        return { success: false, message: error.message };    
    }
}


export const deleteMasterTableService = async (id) => {
    try {
        const query = `DELETE FROM masterTable WHERE id = ?`;
        const [response] = await database.query(query, [id]);
        return {success: true, message: "master table deleted successfully.", data: response.insertId }
    } catch (error) {
        return { success: false, message: "unable to delete master table", data: error.message };
    }
}


