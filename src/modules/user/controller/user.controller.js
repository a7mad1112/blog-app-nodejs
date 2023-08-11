import UserModel from "./../../../../db/models/user.model.js";
export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    return res.json({ msg: "success", data: users });
  } catch (error) {
    return res.json({ msg: "error", error: error.stack });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;

  const userCount = await UserModel.update(req.body, { where: { id } });
  if (userCount == 0) {
    return res.json({ msg: "Flied to update user data" });
  }
  return res.json({ msg: "success" });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await UserModel.destroy({ where: { id } });
  if (user) return res.json({ msg: "success" });
  else return res.json({ msg: "Failed to delete user, user not found" });
};
