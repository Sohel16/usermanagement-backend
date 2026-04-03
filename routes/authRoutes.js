const express = require("express");
const router = express.Router();
const controller = require("../controllers/authController");

router.post("/register", controller.register);
router.post("/login", controller.login);

module.exports = router;

// Defines authentication routes.
// Maps login and register endpoints.
// Keeps routing separate from logic.
// Works with controllers.
// Easy to extend.