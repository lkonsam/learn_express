// import blogsModel from "../Models/BlogsModel.js";
import BlogService from "../Services/BlogService.js";

async function createNewBlog(req, res) {
  try {
    if (validateBlogInput(res.body)) {
      const response = await BlogService.createBloDTO(req.body);
      res.status(201).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Error while creating", error: error });
  }
}
export { createNewBlog };
