const Sequelize = require("sequelize");

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_CONNECTION,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_PORT,
    port: process.env.DB_HOST,
    dialect: process.env.DB,
    define: {
      timestamps: false,
    },
  }
);

const connectDataBase = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
};
module.exports = { connectDataBase, sequelize };
