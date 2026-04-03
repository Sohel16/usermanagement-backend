const userService = require("../services/userService");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    console.log(users, 'userss')
    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    await userService.createUser(req.body);
    res.json({ message: "User created" });
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    await userService.updateUser(req.params.id, req.body);
    res.json({ message: "User updated" });
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    await userService.deleteUser(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    next(err);
  }
};

// Handles HTTP requests and responses for users.
// Calls service layer for logic.
// Sends JSON responses to client.
// Forwards errors to middleware.
// Keeps controllers thin.