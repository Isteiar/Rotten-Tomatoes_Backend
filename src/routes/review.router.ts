import { Router } from "express";
import {
  getAllReviews,
  getSingleReview,
} from "../controllers/review.controller";

const reviewRouter = Router();

reviewRouter.get("/", getAllReviews);
reviewRouter.get("/:reviewId", getSingleReview);


export default reviewRouter;
