import { Router } from "express";
import { getAllMovies, getSingleMovie } from "../controllers/movie.controller";

const movieRouter = Router();

movieRouter.get("/", getAllMovies);
movieRouter.get("/:movieId", getSingleMovie);

export default movieRouter;
