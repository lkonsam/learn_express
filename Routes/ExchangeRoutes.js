import express from "express";

const router = express.Router();
import {
  getExchangeConvert,
  getExchangeCurrentcy,
} from "../Controllers/ExchangeController.js";
import AuthMiddleware from "../Middleware/AuthMiddleware.js";

// common path /exchange

router.get("/", async (req, res) => {
  try {
    const data = await getCurrencyData();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch currency data" });
  }
});

// /exchange/currencies
router.get("/currencies", AuthMiddleware, getExchangeCurrentcy);
// /exchange/convert?value=10&currency=INR&to_currency=USD
router.get("/convert", AuthMiddleware, getExchangeConvert);

export default router;
