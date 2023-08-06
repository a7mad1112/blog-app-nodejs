import UserModel from './../../../../db/models/user.model.js';
export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll();     
    return res.json({ msg: "success", data: users });
  } catch(error) {
    return res.json({ msg: "error", error: error.stack });
  }
};
