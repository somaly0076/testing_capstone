const dotenv = require("dotenv");
dotenv.config();
const app = require("./app.js");

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
