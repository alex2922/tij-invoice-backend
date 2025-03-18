import { database } from "../db/database.js";

// CREATE (Add Client)
export const AddClients = async (client) => {
  try {
    const query = `INSERT INTO clients (name , contact, email, gstnum, address) VALUES (?, ?, ?, ?, ?)`;
    const value = [
      client.name,
      client.contact,
      client.email,
      client.gstnum,
      client.address,
    ];
    const [reponse] = await database.query(query, value);
    return {
      success: true,
      message: "client added successfully",
      data: reponse.insertId,
    };
  } catch (error) {
    return {
      success: true,
      message: "unable to add client",
      data: error.message,
    };
  }
};

export const updateClients = async (id, client) => {
  try {
    const query = `UPDATE clients 
        SET name = ?, contact = ?, email = ?, gstnum = ?, address = ? 
        WHERE id = ?`;
    const values = [
      client.name,
      client.contact,
      client.email,
      client.gstnum,
      client.address,
      id,
    ];

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
