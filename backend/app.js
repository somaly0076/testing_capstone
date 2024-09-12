
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

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());
app.use(mongoSanitize());
app.use(xss());
app.use(express.json())
app.use(
  hpp({
    whitelist: ["role", "active", "phoneNumber", "address"],
  })
);

app.use(express.urlencoded({ extended: true }));

// Performance middleware
app.use(compress());

// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Rate limiting
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

// Body parsing
app.use(express.json({ limit: "10kb" }));

// Serve static files
app.use(express.static(`${__dirname}/public`));

// Custom middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes
app.use("/api/users", userRouter);

// Undefined route handler
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!, 404`));
});

// Global error handler
app.use(globalErrorHandler);

module.exports = app;