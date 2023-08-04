import authRouter from "./auth/auth.router.js";
const initApp = (app, express) => {
  app.use(express.json());
  app.use("/auth", authRouter);
};

export default initApp;
