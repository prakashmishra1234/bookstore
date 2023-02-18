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
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB,
    define: {
      timestamps: false,
    },
  }
);

const User = sequelize.define("user", {
  Firstname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Lastname: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
