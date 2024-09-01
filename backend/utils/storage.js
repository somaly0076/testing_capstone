const multer = require("multer");
const path = require("path");
const AppError = require("../utils/appError");
const crypto = require("crypto");

// Define storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "./../uploads")); // Directory for uploaded files
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = crypto.randomBytes(16).toString("hex");
    cb(null, `${uniqueSuffix}${ext}`);
  },
});

// Create multer instance
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new AppError("Not an image! Please upload only images.", 400), false);
    }
  },
});

module.exports = upload;
