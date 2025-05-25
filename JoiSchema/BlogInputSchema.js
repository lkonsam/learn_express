import Joi from "joi";

const BlogInputSchema = Joi.object({
  title: Joi.string().min(9).max(100).required(),
  content: Joi.string().min(9).max(2000).required(),
  email: Joi.string().max(75).required(),
  phone: Joi.string().min(10).max(10).required(),
});

function validateBlogInput(request) {
  const isValidInput = BlogInputSchema.validate(request);
  return isValidInput;
}

export { BlogInputSchema, validateBlogInput };
