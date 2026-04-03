require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Entry point of application.
// Loads environment variables.
// Starts server.
// Keeps startup logic separate.
// Helps deployment.