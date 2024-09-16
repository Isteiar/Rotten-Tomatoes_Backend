import { DataTypes, Model } from "sequelize";
import sequelize from "../index";
import { Movie } from "../../../interfaces/movie.interface";

export interface MovieInstance extends Model<Movie>, Movie {
  createdAt?: Date;
  updatedAt?: Date;
}

const MovieTable = sequelize.define<MovieInstance>("Movie", {
  movieId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
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
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseYear: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  votes: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  types: {
    type: DataTypes.ENUM('movie', 'series'),
    allowNull: false,
  },
  episodes: {
    type: DataTypes.INTEGER,
    allowNull: true, 
  },
});

export default MovieTable;

