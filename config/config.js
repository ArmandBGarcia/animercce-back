require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    host: "containers-us-west-42.railway.app",
    port: 5553,
    database: "railway",
    dialect: "postgres",
    password: "SYlXHxGG4t6zKlRv6exj",
    // logging: false,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
  },
};
