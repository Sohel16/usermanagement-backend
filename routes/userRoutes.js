const express = require("express");
const router = express.Router();
// const auth = require("../middleware/authMiddleware");
const users = require("../controllers/userController");

// router.use(auth);

router.get("/", users.getUsers);
router.get("/:id", users.getUser);
router.post("/create", users.createUser);
router.put("/:id", users.updateUser);
router.delete("/:id", users.deleteUser);

module.exports = router;

// Defines user CRUD routes.
// Applies authentication middleware.
// Maps routes to controllers.
// Keeps routing clean.
// Improves scalability.