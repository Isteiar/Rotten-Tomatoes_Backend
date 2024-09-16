import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  database: "RottenTomatoesDB",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1998",
});

export default sequelize;

