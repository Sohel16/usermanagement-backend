const userRepo = require("../repositories/userRepository");

exports.getAllUsers = async () => {
  return await userRepo.findAll();
};

exports.getUserById = async (id) => {
  const user = await userRepo.findById(id);
  if (!user) throw new Error("User not found");
  return user;
};

exports.createUser = async (data) => {
  if (!data.email) throw new Error("Email is required");
  return await userRepo.create(data);
};

exports.updateUser = async (id, data) => {
  await userRepo.update(id, data);
};

exports.deleteUser = async (id) => {
  await userRepo.delete(id);
};


// Contains business logic for user operations.
// Validates data before database interaction.
// Calls repository functions for persistence.
// Keeps controllers clean and minimal.
// Central place for reusable logic.