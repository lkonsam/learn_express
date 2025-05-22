import express from "express";

import config from "./Config/index.js";

import mongoose from "mongoose";
import { ApiRouter, WebRouter } from "./Routes/index.js";

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
server.use(express.json());
server.use("/", WebRouter);
server.use("/api/v1", ApiRouter);

server.use((req, res) => {
  res.status(404).send("<Custom 404 message>");
});

server.listen(PORT, () => {
  console.log(`Node.js server started on port ${PORT}`);
});
