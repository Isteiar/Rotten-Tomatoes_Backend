import { DataTypes, Model } from "sequelize";
import {sequelize} from "./index";
import { Category } from "../../interfaces/category.interface";

export interface CategoryInstance extends Model<Category>, Category {
  createdAt?: Date;
  updatedAt?: Date;
}

export const CategoryTable = sequelize.define<CategoryInstance>("Category", {
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
