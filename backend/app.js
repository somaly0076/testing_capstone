const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const compress = require("compression");
const hpp = require("hpp");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const userRouter = require("./routes/userRoutes.js");
const jobRouter = require("./routes/jobRoutes.js");
const companyRouter = require("./routes/companyRoutes.js")

const app = express();


app.use(
  cors({
    origin: process.env.ORIGIN,
    allowedHeaders: ["Authorization", "Content-Type"],
  })
);
app.use(helmet());
app.use(compress());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// const limiter = rateLimit({
//   max: 100,
//   windowMs: 60 * 60 * 1000,
//   message: "Too many requests from this IP, please try again in an hour!",
// });
// app.use("/api", limiter);

app.use(express.json({ limit: "10kb" }));
app.use(mongoSanitize());
app.use(xss());
app.use(
  hpp({
    whitelist: ["role", "active", "phoneNumber", "address"],
  })
);
app.use(globalErrorHandler);
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/users", userRouter);
app.use("/api/jobs", jobRouter);
app.use("/api/companies", companyRouter);

module.exports = app;
