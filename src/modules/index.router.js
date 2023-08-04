import authRouter from "./auth/auth.router.js";
import blogRouter from "./blog/blog.router.js";
import userRouter from "./user/user.router.js";
const initApp = (app, express) => {
  app.use(express.json());
  app.use("/auth", authRouter);
  app.use("/blogs", blogRouter);
  app.use("/users", userRouter);
  app.use("*", (req, res) => {
    return res.status(404).json({ msg: "Page Not Found" });
  });
};

export default initApp;
