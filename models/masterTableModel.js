export class masterTableModel{
    constructor(masterTable){
        this.id = masterTable.id;
        this.entryCreatedOn = masterTable.entryCreatedOn;
        this.journeyDate = masterTable.journeyDate;
        this.bookingDate = masterTable.bookingDate;
        this.invoiceNum = masterTable.invoiceNum;
        this.clientName = masterTable.clientName;
        this.clientPayment = masterTable.clientPayment;
        this.systemReference = masterTable.systemReference;
        this.portalOfBooking = masterTable.portalOfBooking;
        this.gstDetails = masterTable.gstDetails;
        this.departureCity = masterTable.departureCity;
        this.arrivalCity = masterTable.arrivalCity;
        this.serviceType = masterTable.serviceType;
        this.netPurchase = masterTable.netPurchase;
        this.markupCommission = masterTable.markupCommission;
        this.gst = masterTable.gst;
        this.invoiceAmount = masterTable.invoiceAmount;
        this.modeOfPayment = masterTable.modeOfPayment;
        this.netProfit = masterTable.netProfit;
        this.status = masterTable.status;
    }
}

export default masterTableModel;