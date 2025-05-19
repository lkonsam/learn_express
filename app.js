import express from "express";

import config from "./Config/index.js";

import ExchangeRouter from "./Routes/ExchangeRoutes.js";
import UserRouter from "./Routes/UserRouter.js";
import mongoose from "mongoose";

const server = express();
const PORT = config.port;

mongoose
  .connect(config.mongoose.url)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

server.use("/exchange", ExchangeRouter);

server.use("/api/v1/user", UserRouter);

server.use((req, res) => {
  res.status(404).send("<Custom 404 message>");
});

server.listen(PORT, () => {
  console.log(`Node.js server started on port ${PORT}`);
});
