import express from "express";
import * as authController from "./controller/auth.controller.js";
const app = express();

app.post("/signup", authController.signup);

export default app;
