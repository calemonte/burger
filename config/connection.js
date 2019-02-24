"use strict";

// require("dotenv").config();
const mysql = require("mysql");
// const keys = require("./keys");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    // password: keys.mysqlDB.id,
    password: "yourPassword",
    database: "burgers_db"
  });
}

// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;
