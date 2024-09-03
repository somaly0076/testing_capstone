const dotenv = require("dotenv");
dotenv.config();
const crypto = require("crypto");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const sendEmail = require("../utils/email");
const { Op } = require("sequelize");

// Token creation
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// Token send
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);
  const cookieOptions = {
    expires: new Date(
      Date.now() +
        (parseInt(process.env.JWT_COOKIE_EXPIRES_IN) || 7) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;

  const id = user.id;
  const userName = user.userName;

  res.status(statusCode).json({
    status: "success",
    token,
    id,
    userName,
    data: {
      user,
    },
  });
};

// User signup
exports.signup = catchAsync(async (req, res, next) => {
  const {
    firstName,
    lastName,
    userName,
    email,
    password,
    passwordConfirm,
    formType, // Added formType
  } = req.body;

  // Check if all required fields are provided
  if (
    !firstName ||
    !lastName ||
    !userName ||
    !email ||
    !password ||
    !passwordConfirm ||
    !formType
  ) {
    return next(new AppError("Please provide all required fields!", 400));
  }

  // Check if passwords match
  if (password !== passwordConfirm) {
    return next(new AppError("Passwords do not match.", 400));
  }

  // Check if user already exists
  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    return next(new AppError("Email already exists!", 400));
  }

  // Determine user role based on formType
  const role = formType === "business" ? "admin" : "user";

  // Create new user with the appropriate role
  const newUser = await User.create({
    firstName,
    lastName,
    userName,
    email,
    password,
    role, // Assign the role based on formType
  });

  createSendToken(newUser, 201, res);
});

// User login
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }

  const user = await User.findOne({
    where: { email },
    attributes: ["id", "userName", "password"],
  });

  if (!user || !(await user.correctPassword(password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  createSendToken(user, 200, res);
});

// Protected route to check whether the user is authenticated
exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access.", 401)
    );
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const currentUser = await User.findByPk(decoded.id); //pk: primary key

  if (!currentUser) {
    return next(
      new AppError("The user belonging to this token no longer exists.", 401)
    );
  }

  req.user = currentUser;
  next();
});

// Admin only routes
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }

    next();
  };
};

// Forgot password
exports.forgotPassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) {
    return next(new AppError("There is no user with this email address.", 404));
  }

  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/api/users/resetPassword/${resetToken}`;

  const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Your password reset token (valid for 10 min)",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
      token: resetToken,
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError(
        "There was an error sending the email. Try again later!",
        500
      )
    );
  }
});

// Reset password
exports.resetPassword = catchAsync(async (req, res, next) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    where: {
      passwordResetToken: hashedToken,
      passwordResetExpires: { [Op.gt]: Date.now() },
    },
  });

  if (!user) {
    return next(new AppError("Token is invalid or has expired", 400));
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  createSendToken(user, 200, res);
});

// Update password
exports.updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findByPk(req.user.id);

  if (!(await user.correctPassword(req.body.passwordCurrent))) {
    return next(new AppError("Your current password is wrong.", 401));
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  createSendToken(user, 200, res);
});
