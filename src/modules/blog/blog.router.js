import express from "express";
import * as blogController from "./controller/blog.controller.js";
const app = express();
app.get("/", blogController.getBlogs);
export default app;
