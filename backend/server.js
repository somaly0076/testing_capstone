const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
const app = require("./app.js");

dotenv.config();

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "mysql",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// Sync all models that aren't already in the database
sequelize.sync().then(() => {
  console.log("Synced models with the database");
});
