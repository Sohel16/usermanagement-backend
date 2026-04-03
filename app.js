const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// app.use(require("./middleware/errorMiddleware"));

module.exports = app;

// Initializes Express app.
// Adds middleware like JSON parsing and CORS.
// Connects routes.
// Adds error handling middleware.
// Keeps setup separate from server.