require('dotenv').config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  PORT_WEB_APP: process.env.PORT_WEB_APP,

  /** DATABASE */
  db: {
    DB_HOST:  process.env.MYSQL_HOST,
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

  /** AUTH KEY */
  auth: {
    secret: process.env.AUTH_SECRECT,
  },

  /** Mailer Key */
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  toMailAddress: process.env.EMAIL_FROM,

  /** host mail */
  HOST_MAIL_ID: process.env.HOST_MAIL_ID,

  /**url host */
  URL_HOST: process.env.URL_HOST,

  /** storage */
  STORAGE_CONNECTION_STRING: process.env.AZURE_STORAGE_CONNECTION_STRING,
  STORAGE_ACCESS_KEY: process.env.AZURE_STORAGE_SECRET_KEY,
  STORAGE_ACCOUNT_NAME: process.env.AZURE_STORAGE_ACCOUNT_NAME,

  /**sms */
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
};
