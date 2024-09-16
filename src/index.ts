import express, { Express } from "express";
import { router } from "./routes/routes";
import sequelize from "./models";

const port = 3000;

//create app
const app: Express = express();
//bodyparser
app.use(express.json());

//register routes
app.use(router);

//server listening
async function initiateServer() {
  try {
    await sequelize.sync();
    app.listen(port, () => {
      console.log("Server Started");
    });
  } catch (error) {
    console.log(error);
  }
}

initiateServer();
