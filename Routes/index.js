import express from "express";
import ExchangeRouter from "./ExchangeRouter.js";
import UserRouter from "./UserRouter.js";
import BlogRouter from "./BlogRouter.js";

const ApiRouter = express.Router();
const WebRouter = express.Router();

WebRouter.use("/exchange", ExchangeRouter);

ApiRouter.use("/user", UserRouter);
ApiRouter.use("/blog", BlogRouter);

export { WebRouter, ApiRouter };
