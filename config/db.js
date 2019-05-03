require('dotenv').config();

module.exports = {
  local: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASS,
    database: process.env.DB_DEV,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    operatorsAliases: false,
    dialect: 'postgres',
    logging: true,
  },
  development: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASS,
    database: process.env.DB_DEV,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    operatorsAliases: false,
    dialect: 'postgres',
    logging: false,
  },
  test: {
    username: process.env.DB_TEST_USER || 'postgres',
    password: process.env.DB_TEST_PASS || 'postgres',
    database: process.env.DB_TEST || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '5432',
    operatorsAliases: false,
    dialect: 'postgres',
    logging: false,
  },
  production: {
    username: process.env.DB_PRD_USER,
    password: process.env.DB_PRD_PASS,
    database: process.env.DB_PRD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    operatorsAliases: false,
    dialect: 'postgres',
    logging: false,
  },
};
