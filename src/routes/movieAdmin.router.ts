import { Router } from "express";
import { createMovie, deleteMovie, updateMovie } from "../controllers/movie.controller";

const movieAdminRouter = Router();
movieAdminRouter.post('/add',createMovie)
movieAdminRouter.put("/update/:movieId", updateMovie);
movieAdminRouter.delete("/delete/:movieId", deleteMovie);

export default movieAdminRouter;
