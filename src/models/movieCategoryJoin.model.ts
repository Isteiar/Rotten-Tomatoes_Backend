import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";
import { MovieCategoryJoin } from "../../interfaces/movieCategoryJoin.interface";

export interface MovieCategoryJoinInstance
  extends Model<MovieCategoryJoin>,
    MovieCategoryJoin {
  createdAt?: Date;
  updatedAt?: Date;
}

export const MovieCategoryJoinTable =
  sequelize.define<MovieCategoryJoinInstance>("Movie_Genre", {
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
