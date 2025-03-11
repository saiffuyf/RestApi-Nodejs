const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { validateUser } = require("../validateUser/validate");
const asyncHandler = require("express-async-handler");

// Create User
router.post("/", asyncHandler(async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) {
    res.status(400);
    throw new Error("Email already exists");
  }

  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json(newUser);
}));


// Get All Users
router.get("/", asyncHandler(async (req, res) => {
  const users = await User.find();
  res.json(users);
}));

// Get User by ID
router.get("/:id", asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  res.json(user);
}));


// Update User By ID
router.put("/:id", asyncHandler(async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  Object.assign(user, req.body);
  await user.save();
  res.json(user);
}));

// Delete User By ID
router.delete("/:id", asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  await user.deleteOne();
  res.json({ message: "User deleted" });
}));

module.exports = router;
