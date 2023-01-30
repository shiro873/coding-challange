const config = require("../config/config.js");
const { Sequelize, DataTypes, Op } = require("sequelize");
const fs = require("fs");
const path = require("path");

const sequelize = new Sequelize(
  config.db.DB_NAME,
  config.db.DB_USER,
  config.db.DB_PASS,
  {
    host: config.db.DB_HOST,
    dialect: config.db.dialect,
    port: 3306,
    poll: {
      max: config.db.pool.max,
      min: config.db.pool.min,
      acquire: config.db.pool.acquire,
      idle: config.db.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

db.user = require('./user')(sequelize, Sequelize, DataTypes);
db.selectorType = require('./selectorType')(sequelize, Sequelize, DataTypes);
db.selectorSubTypes = require('./selectorSubType')(sequelize, Sequelize, DataTypes);

db.selectorSubTypes.belongsTo(db.selectorSubTypes);
db.selectorType.hasMany(db.selectorSubTypes);


module.exports = db;
