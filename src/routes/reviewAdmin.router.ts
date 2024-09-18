import { Router } from "express";
import { createReview, deleteReview, updateReview } from "../controllers/review.controller";

const reviewAdminRouter = Router();
reviewAdminRouter.post('/add',createReview)
reviewAdminRouter.put("/update/:reviewId", updateReview);
reviewAdminRouter.delete("/delete/:reviewId", deleteReview);

export default reviewAdminRouter;