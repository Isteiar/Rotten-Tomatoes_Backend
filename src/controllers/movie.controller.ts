import {  Response } from "express";
import { ExtendedRequest } from "../../interfaces/extendedRequest.interface";
import { MovieTable } from "../models/movie.model";

// Controller function to get all movies
export const getAllMovies = async (req: ExtendedRequest, res: Response) => {
  try {
    const movies = await MovieTable.findAll();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve movies ", error: err });
  }
};

// Controller function to get a single movie by movieId
export const getSingleMovie = async (req: ExtendedRequest, res: Response) => {
  try {
    const { movieId } = req.params;
    const movie = await MovieTable.findByPk(movieId);

    if (movie) {
      res.status(200).json(movie);
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve movie", error: err });
  }
};

// Controller function to update a movie by movieId
export const updateMovie = async (req: ExtendedRequest, res: Response) => {
  try {
    const { movieId } = req.params;
    const updated = await MovieTable.update(req.body, {
      where: { movieId },
    });

    if (updated) {
      const updatedMovie = await MovieTable.findByPk(movieId);
      res.status(201).json(updatedMovie);
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to update movie", error: err });
  }
};

// Controller function to delete a movie by movieId
export const deleteMovie = async (req: ExtendedRequest, res: Response) => {
  try {
    const { movieId } = req.params;
    const deleted = await MovieTable.destroy({
      where: { movieId },
    });

    if (deleted) {
      res.status(201).json({ message: "Movie deleted successfully" });
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete movie", error });
  }
};

// Controller function to add a new movie
export const createMovie = async (req: ExtendedRequest, res: Response) => {
  try {
    const newMovie = await MovieTable.create(req.body);
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).json({ message: "Failed to create movie", error: err });
  }
};
