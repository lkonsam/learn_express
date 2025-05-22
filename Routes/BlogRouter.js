import express from "express";
import { createBlog } from "../Controllers/BlogsController.js";

const BlogRouter = express.Router();

BlogRouter.post("/", createBlog);

export default BlogRouter;
