import UserModel from "./../../../../db/models/user.model.js";
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.crate({ userName: name, email, password });
    return res.json({ msg: "success", data: user });
  } catch (error) {
    if (error.original?.errno == 1062)
      return res.json({ msg: "email already exist" });
    return res.json({ msg: "error", error });
  }
};
