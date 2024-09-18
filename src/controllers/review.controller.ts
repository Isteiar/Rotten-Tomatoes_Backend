import { Response } from "express";
import { ExtendedRequest } from "../../interfaces/extendedRequest.interface";
import { ReviewTable } from "../models/review.model";

// Controller function to get all reviews
export const getAllReviews = async (req: ExtendedRequest, res: Response) => {
  try {
    const reviews = await ReviewTable.findAll();
    res.status(200).json(reviews);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to retrieve reviews ", error: err });
  }
};

// Controller function to get a single review by reviewId
export const getSingleReview = async (req: ExtendedRequest, res: Response) => {
  try {
    const { reviewId } = req.params;
    const review = await ReviewTable.findByPk(reviewId);

    if (review) {
      res.status(200).json(review);
    } else {
      res.status(404).json({ message: "Review not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve review", error: err });
  }
};


// Controller function to update a review by reviewId
export const updateReview = async (req: ExtendedRequest, res: Response) => {
    try {
      const { reviewId } = req.params;
      const updated = await ReviewTable.update(req.body, {
        where: { reviewId },
      });
  
      if (updated) {
        const updatedReview = await ReviewTable.findByPk(reviewId);
        res.status(201).json(updatedReview);
      } else {
        res.status(404).json({ message: "Review not found" });
      }
    } catch (err) {
      res.status(500).json({ message: "Failed to update review", error: err });
    }
  };


  // Controller function to delete a review by reviewId
export const deleteReview = async (req: ExtendedRequest, res: Response) => {
    try {
      const { reviewId } = req.params;
      const deleted = await ReviewTable.destroy({
        where: { reviewId },
      });
  
      if (deleted) {
        res.status(201).json({ message: "Review deleted successfully" });
      } else {
        res.status(404).json({ message: "Review not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to delete review", error });
    }
  };


  // Controller function to add a new review
export const createReview = async (req: ExtendedRequest, res: Response) => {
    try {
      const newReview = await ReviewTable.create(req.body);
      res.status(201).json(newReview);
    } catch (err) {
      res.status(500).json({ message: "Failed to create review", error: err });
    }
  };
  