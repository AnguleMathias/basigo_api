const dbConfig = require("../../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

// sequelize references our new connection to the DB.
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  operatorsAliases: false,
  dialect: dbConfig.DIALECT,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// authenticate() checks if the connection to the DB is successful.
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models/tables
db.users = require("./users.model.js")(sequelize, DataTypes);
db.leads = require("./leads.model.js")(sequelize, DataTypes);
db.customers = require("./customers.model.js")(sequelize, DataTypes);
db.products = require("./products.model.js")(sequelize, DataTypes);

// associations
db.leads.hasMany(db.customers, { onDelete: "CASCADE" });
db.customers.belongsTo(db.leads, { onDelete: "CASCADE" });

// db.leads.belongsToM

db.sequelize.sync({ force: false }).then(() => {
  console.log("Database connection successfull!!");
});

module.exports = db;
