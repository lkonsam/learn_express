import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
  },
  content: { type: String, required: true },
  authors: [String],
  email: {
    type: String,
    required: true,
    maxlength: 75,
  },
});

const blogsModel = mongoose.model("blogs", blogSchema);
export default blogsModel;
