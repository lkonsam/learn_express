import express from "express";

import dotenv from "dotenv";
dotenv.config();

// import {
//   getExchangeConvert,
//   getExchangeCurrentcy,
// } from "./Controllers/ExchangeController";

import ExchangeRouter from "./Routes/ExchangeRoutes.js";
import { getCurrencyData } from "./services/currencyService.js";

const server = express();
const PORT = process.env.PORT || 8089;

server.get("/all", async (req, res) => {
  try {
    const data = await getCurrencyData();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch currency data" });
  }
});

// get all currencies
// server.get("/exchange/currencies", getExchangeCurrentcy);
// // /exchange/convert?value=10&currency=INR&to_currency=USD
// server.get("/exchange/convert", getExchangeConvert);

server.use("/exchange", ExchangeRouter);

server.use((req, res) => {
  res.status(404).send("<Custom 404 message>");
});

server.listen(PORT, () => {
  console.log(`Node.js server started on port ${PORT}`);
});
