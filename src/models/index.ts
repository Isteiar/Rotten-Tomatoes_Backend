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
