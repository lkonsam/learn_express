import express from "express";
import { createNewBlog } from "../Controllers/BlogsController.js";

const BlogRouter = express.Router();

BlogRouter.post("/", createNewBlog);

export default BlogRouter;
