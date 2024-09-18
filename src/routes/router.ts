import express, { Response } from "express";
import authMiddleware from "../middleware/auth.middleware";
import { createUser, login } from "../controllers/createUser.controller";

import movieRouter from "./movie.router";
import movieAdminRouter from "./movieAdmin.router";

const router = express.Router();

router.post("/signup", createUser);
router.post("/login", login);

router.use("/movies",movieRouter);
router.use("/my-movie", authMiddleware, movieAdminRouter);

export { router };
