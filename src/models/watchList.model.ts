import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";
import { WatchList } from "../../interfaces/watchList.interface";

export interface WatchListInstance extends Model<WatchList>, WatchList {
  createdAt?: Date;
  updatedAt?: Date;
}

export const WatchListTable = sequelize.define<WatchListInstance>("WatchList", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  movieId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
