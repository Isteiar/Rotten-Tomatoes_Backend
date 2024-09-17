import express, { Express } from "express";
import { router } from "./routes/routes";
import {sequelize} from "./models";
import { UserTable } from "./models/user.model";
import { MovieTable } from "./models/movie.model";
import { ReviewTable } from "./models/review.model";
import { ContentGuideTable } from "./models/contentguide.model";
import { CategoryTable } from "./models/category.model";
import { MovieCategoryJoinTable } from "./models/movieCategoryJoin.model";
import { WatchListTable } from "./models/watchList.model";

const port = 3000;

//create app instance
const app: Express = express();
//bodyparser
app.use(express.json());

//register routes
app.use(router);

//server listening
async function initiateServer() {
  try {
    await sequelize.sync();
    await UserTable.sync();
    await MovieTable.sync();
    await ReviewTable.sync();
    await ContentGuideTable.sync();
    await CategoryTable.sync();
    await WatchListTable.sync();
    await MovieCategoryJoinTable.sync();

    app.listen(port, () => {
      console.log("Server Started");
    });
  } catch (error) {
    console.log(error);
  }
}

initiateServer();
