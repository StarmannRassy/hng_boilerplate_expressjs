import { Router } from "express";
import { authMiddleware } from "../middleware";
import { createBlogController } from "../controllers/createBlogController";

const blogRouter = Router();

blogRouter.post("/blog/create", createBlogController);

export { blogRouter };
