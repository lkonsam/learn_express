import blogsModel from "../Models/BlogsModel.js";

class BlogService {
  static async createBloDTO(data) {
    try {
      const newBlog = blogsModel({
        title: data.title,
        content: data.content,
        authors: data.authors || [], //nullable
        email: data.email,
        phone: data.phone,
      });
      const response = await newBlog.save();
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default BlogService;
