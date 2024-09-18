import express, { Response } from "express";
import authMiddleware from "../middleware/auth.middleware";
import { createUser, login } from "../controllers/user.controller";

import movieRouter from "./movie.router";
import movieAdminRouter from "./movieAdmin.router";
import reviewRouter from "./review.router";
import reviewAdminRouter from "./reviewAdmin.router";
import categoryRouter from "./category.router";

const router = express.Router();

router.post("/signup", createUser);
router.post("/login", login);

router.use("/movies", movieRouter);
router.use("/reviews", reviewRouter);
router.use("/categories", categoryRouter);

router.use("/my-movie", authMiddleware, movieAdminRouter);
router.use("/my-review", authMiddleware, reviewAdminRouter);

export { router };
