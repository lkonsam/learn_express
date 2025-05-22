import blogsModel from "../Models/BlogsModel.js";

async function createBlog(req, res) {
  const { title, content } = req.body;
  // res.status(201).json({ title, content });
  try {
    const newBlog = blogsModel({
      title: title,
      content: content,
    });
    const response = await newBlog.save();

    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: "Error while creating", error: error });
  }
}
export { createBlog };
