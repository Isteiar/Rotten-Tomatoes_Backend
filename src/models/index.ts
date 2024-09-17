import { Sequelize } from "sequelize";

import { UserTable } from "./user.model";
import { CategoryTable } from "./category.model";
import { ContentGuideTable } from "./contentguide.model";
import { MovieTable } from "./movie.model";
import { MovieCategoryJoinTable } from "./movieCategoryJoin.model";
import { ReviewTable } from "./review.model";
import { WatchListTable } from "./watchList.model";

export const sequelize = new Sequelize({
  dialect: "postgres",
  database: "RottenTomatoesDB",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1998",
});

// Associations

UserTable.hasMany(ReviewTable, { foreignKey: "userId", onDelete: "CASCADE" });
ReviewTable.belongsTo(UserTable, { foreignKey: "userId", onDelete: "CASCADE" });

MovieTable.hasMany(ReviewTable, { foreignKey: "movieId", onDelete: "CASCADE" });
ReviewTable.belongsTo(MovieTable, {
  foreignKey: "movieId",
  onDelete: "CASCADE",
});

MovieTable.hasOne(ContentGuideTable, {
  foreignKey: "movieId",
  onDelete: "CASCADE",
});
ContentGuideTable.belongsTo(MovieTable, {
  foreignKey: "movieId",
  onDelete: "CASCADE",
});

UserTable.belongsToMany(MovieTable, {
  through: WatchListTable,
  foreignKey: "userID",
  onDelete: "CASCADE",
});
MovieTable.belongsToMany(UserTable, {
  through: WatchListTable,
  foreignKey: "movieID",
  onDelete: "CASCADE",
});

MovieTable.belongsToMany(CategoryTable, {
  through: MovieCategoryJoinTable,
  foreignKey: "movieID",
  onDelete: "CASCADE",
});

CategoryTable.belongsToMany(MovieTable, {
  through: MovieCategoryJoinTable,
  foreignKey: "categoryId",
  onDelete: "CASCADE",
}
);


