const authService = require("../services/authService");

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    await authService.register(name, email, password);
    res.json({ message: "User registered" });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.json({ token });
  } catch (err) {
    next(err);
  }
};


// Manages authentication requests.
// Extracts request data and calls auth service.
// Returns token or error response.
// Keeps logic minimal.
// Improves separation of concerns.