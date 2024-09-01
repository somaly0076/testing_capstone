const Sequelize = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

// Create a Sequelize instance using the DATABASE_URL environment variable
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "mysql",
  logging: false,
});

// Function to authenticate and sync the database
async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log("DB connection successful!");

    await sequelize.sync();
    console.log("Synced models with the database");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
}

// Initialize the database connection and sync models
initializeDatabase();

module.exports = sequelize;
