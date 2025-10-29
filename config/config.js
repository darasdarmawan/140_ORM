require('dotenv').config();

const development = {
    username: process.env.DB.USERNAME,
    password: process.env.DB.PASS,
    database: process.env.DB.DATABASE,
    host: process.env.DB.HOST,
    port: process.env.DB.PORT,
    dialect: process.env.DB.DIALECT
  };

const test = {
    username: process.env.DB.USERNAME,
    password: process.env.DB.PASS,
    database: process.env.DB.DATABASE,
    host: process.env.DB.HOST,
    port: process.env.DB.PORT,
    dialect: process.env.DB.DIALECT
  };

const production = {
   username: process.env.DB.USERNAME,
    password: process.env.DB.PASS,
    database: process.env.DB.DATABASE,
    host: process.env.DB.HOST,
    port: process.env.DB.PORT,
    dialect: process.env.DB.DIALECT
  };

module.exports = {
  development,
  test,
  production
};
