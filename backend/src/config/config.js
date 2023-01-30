require('dotenv').config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  PORT_WEB_APP: process.env.PORT_WEB_APP,

  /** DATABASE */
  db: {
    DB_HOST: process.env.MYSQL_HOST,
    DB_USER: process.env.MYSQL_USERNAME,
    DB_PASS: process.env.MYSQL_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    dialect: 'mysql',

    // pool is optional, it will be used for Sequelize connection pool configuration
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },

};
