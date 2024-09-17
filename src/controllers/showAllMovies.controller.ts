import { Request, Response } from "express";
import { MovieTable } from "../models/movie.model";

export const showAllMovies = async (req: Request, res: Response) => {
  const { movieId,title, thumbnail, duration,releaseYear,votes, types,episodes } = req.body;


};
