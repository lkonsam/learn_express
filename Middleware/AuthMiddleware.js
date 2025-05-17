// const MT_SECRET_PASSWORD = "abcd1234";
import dotenv from "dotenv";
dotenv.config();
const MT_SECRET_PASSWORD = process.env.MT_SECRET_PASSWORD;

function AuthMiddleware(req, res, next) {
  const header = req.headers;
  const authorization = header.authorization; // asdf1234

  // Middleware is checking if req is good.
  if (authorization === MT_SECRET_PASSWORD) {
    next();
  } else {
    res.status(429).json({
      message: "please provide with correct password !!AuthMiddleware",
    });
  }
}

export default AuthMiddleware;
