import express from "express";

const router = express.Router();
import {
  getExchangeConvert,
  getExchangeCurrentcy,
} from "../Controllers/ExchangeController.js";
import AuthMiddleware from "../Middleware/AuthMiddleware.js";

// common path /exchange

// /exchange/currencies
router.get("/currencies", AuthMiddleware, getExchangeCurrentcy);
// /exchange/convert?value=10&currency=INR&to_currency=USD
router.get("/convert", AuthMiddleware, getExchangeConvert);

export default router;
