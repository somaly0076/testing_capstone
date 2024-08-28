const { DataTypes, Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const sequelize = require("../connection/connection");
const validator = require("validator");

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Please tell us your name!" },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: "Email already exists" },
      validate: {
        isEmail: { msg: "Please provide a valid email" },
      },
    },
    photo: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "user",
      validate: {
        isIn: [["user", "admin", "developer"]],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, Infinity],
      },
    },
    passwordConfirm: {
      type: DataTypes.VIRTUAL,
      validate: {
        isConfirmed(value) {
          if (value !== this.password) {
            throw new Error("Passwords are not the same!");
          }
        },
      },
    },
    passwordChangedAt: {
      type: DataTypes.DATE,
    },
    passwordResetToken: {
      type: DataTypes.STRING,
    },
    passwordResetExpires: {
      type: DataTypes.DATE,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    hooks: {
      beforeSave: async (user, options) => {
        if (user.changed("password")) {
          user.password = await bcrypt.hash(user.password, 12);
          user.passwordConfirm = undefined;
        }

        if (user.isNewRecord || user.changed("password")) {
          user.passwordChangedAt = new Date(Date.now() - 1000);
        }
      },
      beforeFind: (options) => {
        if (!options.where) {
          options.where = {};
        }
        options.where.active = { [Op.ne]: false };
      },
    },
  }
);

// Sync models and handle errors
(async () => {
  try {
    await sequelize.sync();
    console.log("Database & tables created!");
  } catch (error) {
    console.error("Error creating database tables:", error);
  }
})();

User.prototype.correctPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

User.prototype.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

User.prototype.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

module.exports = User;
