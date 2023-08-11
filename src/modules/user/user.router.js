import express from "express";
import * as userController from "./controller/user.controller.js";
const app = express();
app.get('/', userController.getUsers)
app.put('/update/:id', userController.updateUser)
export default app