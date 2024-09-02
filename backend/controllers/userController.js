const User = require("../model/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const storage = require("../utils/storage");

// Filter objects
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

// Get all of the registered users
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

  // Send response
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
});

exports.getUserProfile = async (req, res) => {
  try {
    const { username } = req.params; // Extract the username from the route parameter

    console.log(username);

    const user = await User.findOne({ where: { userName: username } }); // Find the user by username

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      id: user.id,
      userName: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      photo: user.photo,
      bio: user.bio,
      phoneNumber: user.phoneNumber,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// try {
//   const { username } = req.params;
//   const user = await User.findOne({ where: { userName: username } });

//   if (!user) {
//     return res.status(404).json({ message: "User not found!" });
//   }

//   res.status(200).json(user);
// } catch (error) {
//   res
//     .status(500)
//     .json({ message: "Failed to fetch profile", error: error.message });

// Update user profile
exports.updateUser = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "This route is not for password updates. Please use /updateMyPassword.",
        400
      )
    );
  }

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser[1], // Returning updated user from the result
    },
  });
});

// Update user (bio)
exports.updateUserProfile = async (req, res) => {
  try {
    const { username } = req.params;
    const { bio } = req.body;

    const user = await User.findOne({ where: { userName: username } });
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (bio) {
      user.bio = bio;
    }

    // Handle photo upload
    if (req.file) {
      if (user.photo) {
        fs.unlinkSync(path.join("uploads/", user.photo));
      }

      user.photo = req.file.filename;
    }

    await user.save();

    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update profile", error: error.message });
  }
};

// Delete a user
exports.deleteUser = catchAsync(async (req, res, next) => {
  console.log("Delete User request received");
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

// Upload a new file
exports.photoUpload = catchAsync(async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const photoPath = req.file.filename;
    user.photo = photoPath;
    await user.save();

    res.status(200).json({
      message: "Photo uploaded successfully",
      photo: photoPath,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});
