import { DataTypes, Model } from "sequelize";
import sequelize from "../index";
import { User } from "../../../interfaces/user.interface";

export interface UserInstance extends Model<User>, User {
  createdAt?: Date;
  updatedAt?: Date;
}
const UserTable = sequelize.define<UserInstance>("User", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  //Relationships with other tables remain to be created
});

export default UserTable;
