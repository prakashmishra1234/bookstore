const User = require("../models/userModel");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorhandler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");

//Register a user
exports.registerUser = catchAsyncError(async (req, res, next) => {
  let { Firstname, Lastname, password, Username, Email } = req.body;
  const existingUser = await User.findOne({ where: { Username } });
  if (existingUser) return next(new ErrorHandler("User already exist", 200));
  const salt = await bcrypt.genSalt(10);
  const hashdePAssword = await bcrypt.hash(password, salt);
  password = hashdePAssword;
  const newUser = await User.create({
    Firstname: Firstname,
    Lastname: Lastname,
    password: password,
    Username: Username,
    Email: Email,
  });
  res.status(201).send({
    success: true,
    message: "User registered successfully",
    data: newUser,
  });
});

// Login User
exports.loginUser = catchAsyncError(async (req, res, next) => {});

exports.verifyemail = catchAsyncError(async (req, res, next) => {});

exports.getUser = catchAsyncError(async (req, res, next) => {
  const { Username } = req.body;
  const userData = await User.findOne({ where: { Username } });
  if (userData) {
    res
      .status(200)
      .json({ success: true, message: "User found", data: userData });
  } else {
    return next(new ErrorHandler("User not found", 404));
  }
});
