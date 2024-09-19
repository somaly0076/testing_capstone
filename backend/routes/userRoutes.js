const express = require("express");
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
} = require("../controllers/authController");
const multer = require("multer");

const {
  getUserProfile,
  updateUserProfile,
  deleteUser,
  getAllUsers,
  photoUpload,
} = require("../controllers/userController");

const storage = require("./../utils/storage");
const upload = multer({ storage });
const router = express.Router();

router.route("/").get(getAllUsers);

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
  .route("/profile/:username")
  .get(protect, getUserProfile)
  .patch(protect, updateUserProfile)
  .delete(protect, deleteUser);

// router.route("/me").patch(protect, updateUser);

router.post("/uploadPhoto", protect, upload.single("image"), photoUpload);

module.exports = router;
