import authRouter from "./auth/auth.router.js";
import blogRouter from "./blog/blog.router.js";
const initApp = (app, express) => {
  app.use(express.json());
  app.use("/auth", authRouter);
  app.use("/blogs", blogRouter);
};

export default initApp;
