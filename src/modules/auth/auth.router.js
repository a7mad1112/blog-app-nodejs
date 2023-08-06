import express from "express";
import * as authController from "./controller/auth.controller.js";
const app = express();

app.post("/signup", authController.signup);
app.post("/signin", authController.signin);

export default app;
