import BlogModel from "./../../../../db/models/blog.model.js";
import UserModel from "./../../../../db/models/user.model.js";
export const getBlogs = async (req, res) => {
  const blogs = await BlogModel.findAll();
  return res.json({ msg: "success", blogs });
};

export const createBlog = async (req, res) => {
  try {
    const { title, body, UserId } = req.body;

    const user = await UserModel.findByPk(UserId);
    if (!user) {
      return res.json({ msg: "User not found" });
    }

    const blog = await BlogModel.create({ title, body, UserId });
    return res.json({ msg: "success", blog });
  } catch (error) {
    return res.json({ msg: "error", error: error.stack });
  }
};
