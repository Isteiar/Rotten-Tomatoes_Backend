import { DataTypes, Model } from "sequelize";
import {sequelize} from "./index";
import { Movie } from "../../interfaces/movie.interface";

export interface MovieInstance extends Model<Movie>, Movie {
  createdAt?: Date;
  updatedAt?: Date;
}

export const MovieTable = sequelize.define<MovieInstance>(
  "Movie",
  {
    movieId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    releaseYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    votes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    types: {
      type: DataTypes.ENUM("Movie", "Series"),
      allowNull: false,
    },
    episodes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  { timestamps: true }
);

