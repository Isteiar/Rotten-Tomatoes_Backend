import { DataTypes, Model } from "sequelize";
import {sequelize} from "./index";
import { ContentGuide } from "../../interfaces/contentguide.interface";

export interface ContentGuideInstance
  extends Model<ContentGuide>,
    ContentGuide {
  createdAt?: Date;
  updatedAt?: Date;
}

export const ContentGuideTable = sequelize.define<ContentGuideInstance>(
  "ContentGuide",
  {
    contentGuideId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    certificate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nudity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    violence: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profanity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alcohol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    frightening: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  } 
);
