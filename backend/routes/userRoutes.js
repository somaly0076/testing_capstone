const express = require("express");
const {
  updateMe,
  deleteMe,
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  protect,
  updatePassword,
} = require("../controllers/authController");

const router = express.Router();
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

router.patch("/updateMe", protect, updateMe);
router.delete("/deleteMe", protect, deleteMe);

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
