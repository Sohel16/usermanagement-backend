const userRepo = require("../repositories/userRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (name, email, password) => {
  const existing = await userRepo.findByEmail(email);
  if (existing) throw new Error("User already exists");

  const hashed = await bcrypt.hash(password, 10);

  await userRepo.create({ name, email, password: hashed });
};

exports.login = async (email, password) => {
  const user = await userRepo.findByEmail(email);
  if (!user) throw new Error("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return token;
};


// Handles authentication logic like register and login.
// Hashes passwords and verifies credentials.
// Generates JWT tokens for authentication.
// Separates auth logic from controllers.
// Improves security and modularity.