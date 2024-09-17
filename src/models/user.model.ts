import { DataTypes, Model } from "sequelize";
import {sequelize} from "./index";
import { User } from "../../interfaces/user.interface";

export interface UserInstance extends Model<User>, User {
  createdAt?: Date;
  updatedAt?: Date;
}

export const UserTable = sequelize.define<UserInstance>("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});





