import { database } from "../db/database.js";

const clientTable = `CREATE TABLE IF NOT EXISTS clients (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    gstnum VARCHAR(255),
    address TEXT NOT NULL
);
`;

const vendorTable = `CREATE TABLE IF NOT EXISTS vendors (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    gstnum VARCHAR(255) 
)`;

const modeOfPaymentTable = `CREATE TABLE IF NOT EXISTS modeOfPayment (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL)`;

const statusTable = `CREATE TABLE IF NOT EXISTS status (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL)`;

const ServiceTypeTable = `CREATE TABLE IF NOT EXISTS ServiceType (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL)`;

const masterTable = `CREATE TABLE IF NOT EXISTS masterTable (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    entryCreatedOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    journeyDate DATETIME  NOT NULL,
    bookingDate DATETIME  NOT NULL,
    invoiceNum  INT NOT NULL,
    clientName VARCHAR(255) NOT NULL,
    clientPayment VARCHAR(255) NOT NULL,
    systemReference VARCHAR(255) NOT NULL,
    portalOfBooking VARCHAR(255) NOT NULL,
    gstDetails VARCHAR(255) NOT NULL,
    pnr VARCHAR(255) NOT NULL,
    departureCity VARCHAR(255) NOT NULL,
    arrivalCity VARCHAR(255) NOT NULL,
    serviceType VARCHAR(255) NOT NULL,
    netPurchase DECIMAL(10,2) NOT NULL,
    markupCommission DECIMAL(10,2) NOT NULL,
    gst VARCHAR(255) NOT NULL,
    invoiceAmount DECIMAL(10,2) NOT NULL,
    modeOfPayment VARCHAR(255) NOT NULL,
    netProfit DECIMAL(10,2) NOT NULL,
    status VARCHAR(255) NOT NULL,
    refundDate DATETIME ,
    refundAmount VARCHAR(255) ,
    refundMode VARCHAR(255) 


)`;


const userTable = `CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL ,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;


// tables
const table = async (table, query) => {
  try {
    await database.query(query);

    console.log(`${table} created`);
  } catch (error) {
    console.log(error);
  }
};

const createtable = () => {
  table("clients", clientTable);
  table("vendors", vendorTable);
  table("modeOfPayment", modeOfPaymentTable);
  table("status", statusTable);
  table("serviceType", ServiceTypeTable);
  table("masterTable", masterTable);
  table("user", userTable);

  console.log("create all table");
};

export { createtable };
