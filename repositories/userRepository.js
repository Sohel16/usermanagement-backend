// const db = require("../config/db");

// const userlists = [
//   { id: 1, name: "Admin", email: "admin@example.com", role: "admin" },
//   { id: 2, name: "Alice", email: "alice@example.com", role: "user" },
//   { id: 3, name: "Bob", email: "bob@example.com", role: "user" },
// ];

// exports.findAll = async () => {
//   const [rows] = await db.query("SELECT id, name, email, role FROM users");
//   return rows;
// };

// exports.findById = async (id) => {
//   const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
//   return rows[0];
// };

// exports.findByEmail = async (email) => {
//   const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
//   return rows[0];
// };

// exports.create = async (user) => {
//   const [result] = await db.query(
//     "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
//     [user.name, user.email, user.password]
//   );
//   return result;
// };

// exports.update = async (id, user) => {
//   await db.query(
//     "UPDATE users SET name=?, email=? WHERE id=?",
//     [user.name, user.email, id]
//   );
// };

// exports.delete = async (id) => {
//   await db.query("DELETE FROM users WHERE id=?", [id]);
// };

// // Handles all database queries related to users.
// // Keeps SQL logic separate from business logic.
// // Provides reusable functions for services.
// // Makes it easy to switch database or ORM later.
// // Ensures clean data access layer.


// In your users model file
const userlists = [
  { id: 1, name: "Admin", email: "admin@example.com", role: "admin" },
  { id: 2, name: "Alice", email: "alice@example.com", role: "user" },
  { id: 3, name: "Bob", email: "bob@example.com", role: "user" },
];

// Return all users (default list)
exports.findAll = async () => {
  return userlists;
};

// Return a user by ID
exports.findById = async (id) => {
  return userlists.find((u) => u.id === id);
};

// Return a user by email
exports.findByEmail = async (email) => {
  return userlists.find((u) => u.email === email);
};