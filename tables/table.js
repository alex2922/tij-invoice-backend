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
  table("vendors", vendorTable);

  console.log("create all table");
};

export { createtable };
