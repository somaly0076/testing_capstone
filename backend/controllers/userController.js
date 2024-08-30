const User = require("../model/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getUserById = catchAsync(async (req, res, next) => {
  // Ensure req.user is attached by middleware
  if (!req.user) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  // Use the user ID from req.user
  const { id, firstName, lastName, email } = req.user; // Ensure these field names match your model

  res.status(200).json({ id, name: `${firstName} ${lastName}`, email });
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll({
    attributes: {
      exclude: [
        "password",
        "passwordResetToken",
        "passwordResetExpires",
        "passwordChangedAt",
      ],
    },
  });

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "This route is not for password updates. Please use /updateMyPassword.",
        400
      )
    );
  }

  // 2) Filtered out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(req.body, "name", "email");

  // 3) Update user document
  const updatedUser = await User.update(filteredBody, {
    where: { id: req.user.id },
    returning: true,
    plain: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser[1], // Returning updated user from the result
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  console.log("DeleteMe request received");
  console.log("User ID:", req.user.id);

  // Deactivate the user (soft delete)
  await User.update(
    { active: false },
    {
      where: { id: req.user.id },
    }
  );

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.getUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined!",
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined!",
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined!",
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined!",
  });
};
