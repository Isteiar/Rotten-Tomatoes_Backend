import { DataTypes, Model } from "sequelize";
import {sequelize }from "./index";
import { Review } from "../../interfaces/review.interface";


export interface ReviewInstance extends Model<Review>, Review {
  createdAt?: Date;
  updatedAt?: Date;
}

export const ReviewTable = sequelize.define<ReviewInstance>("Review", {
  reviewId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  review: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  reviewDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  movieId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

