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

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkUser = await UserModel.findAll({
      attributes: ['id', 'userName'],
      where: {
        email,
        password,
      },
    });
    if (!checkUser.length) {
      return res.json({ msg: "password or email incorrect" });
    }

    return res.json({ msg: "success", data: checkUser });
  } catch (error) {}
};
