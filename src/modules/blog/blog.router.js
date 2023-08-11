import express from "express";
import * as blogController from "./controller/blog.controller.js";
const app = express();
app.get("/", blogController.getBlogs);
app.post("/create-blog", blogController.createBlog);
export default app;
