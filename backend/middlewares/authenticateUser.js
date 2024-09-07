const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

exports.authenticateUser = async (req, res, next) => {
  const token = req.cookies.token; // Ensure cookies are parsed with cookie-parser
  console.log("token: " + token);

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access, no token found"
    });
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    req.userId = decodedToken.userId;
    next(); // Proceed to the next middleware/route handler
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access, invalid token"
    });
  }
};
