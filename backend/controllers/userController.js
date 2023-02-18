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
exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { password, Username } = req.body;
  if (password && Username) {
    console.log(Username, password);
    const existingUser = await User.findOne({ where: { Username } });

    if (!existingUser) return next(new ErrorHandler("user may not exist", 404));
    const isPasswordMatched = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordMatched)
      return next(new ErrorHandler("Username or passowrd is in correct", 404));

    const { id, Email } = existingUser;

    const dataToBeSent = {
      id: id,
      Username: Username,
      Email: Email,
    };
    const token = jwt.sign(dataToBeSent, process.env.SECRET_KEY, {
      expiresIn: 60 * 60,
    });
    res.status(200).send({
      success: true,
      message: "User logged in successfully",
      data: token,
    });
  } else {
    res.status(404).json({
      success: "false",
      message: "Please enter username and password",
      data: null,
    });
  }
});

exports.getUser = catchAsyncError(async (req, res, next) => {
  const { Username } = req.body;
  const userData = await User.findOne({ where: { Username } });
  if (!userData) return next(new ErrorHandler("User not found", 404));
  res.status(200).send({
    success: true,
    message: "User found",
    data: userData,
  });
});
