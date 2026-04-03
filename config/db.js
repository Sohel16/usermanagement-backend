const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

module.exports = db.promise();


// Handles MySQL database connection using a connection pool.
// Uses environment variables for secure configuration.
// Exports promise-based queries for async/await usage.
// Centralizes database access across the app.
// Improves scalability and maintainability.