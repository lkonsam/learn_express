import mongoose, { Schema } from "mongoose";
import validator from "validator";

const blogSchema = new Schema(
  {
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
      validate: (data) => validator.isEmail(data),
    },
    phone: {
      type: Number,
      validate: (data) => validator.isMobilePhone(data),
    },
  },
  { timestamps: true }
);

const blogsModel = mongoose.model("blogs", blogSchema);
export default blogsModel;
