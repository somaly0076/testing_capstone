const express = require("express");
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
} = require("../controllers/authController");

const {
  getUserProfile,
  updateUserBio,
  deleteUser,
  updateUser,
  getAllUsers,
  photoUpload,
} = require("../controllers/userController");
const multer = require("multer");
const upload = require("../utils/storage");

const router = express.Router();

// Authentication routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/forgotPassword", forgotPassword);
router.patch(
  "/resetPassword/:token",
  (req, res, next) => {
    console.log("Reset password route hit");
    next();
  },
  resetPassword
);
router.patch("/updateMyPassword", protect, updatePassword);

// User routes
router
  .route("/profile")
  .get(protect, getUserProfile)
  .patch(protect, updateUserBio)
  .delete(protect, deleteUser);

router.route("/me").patch(protect, updateUser);

router.route("/").get(getAllUsers);

router.post("/uploadPhoto", protect, upload.single("photo"), photoUpload);

module.exports = router;
