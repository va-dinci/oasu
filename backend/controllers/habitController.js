const asyncHandler = require("express-async-handler");
const { globalAgent } = require("http");

const Habit = require("../models/habitModel");
const User = require("../models/userModel");

// @Desc    Get habits
// @Route   GET /api/habits
// @Access  Private

const getHabits = asyncHandler(async (req, res) => {
  const habits = await Habit.find({ user: req.user.id });

  res.status(200).json(habits);
});

// @Desc    Set a habit
// @Route   POST /api/habits
// @Access  Private

const setHabit = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const habit = await Habit.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(habit);
});

// @Desc    Update a habit
// @Route   PUT /api/habits:id
// @Access  Private

const updateHabit = asyncHandler(async (req, res) => {
  const habit = await Habit.findById(req.params.id);

  if (!habit) {
    res.status(400);
    throw new Error("Habit not found");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (habit.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedHabit = await Habit.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedHabit);
});

// @Desc    Delete a habit
// @Route   DELETE /api/habits:id
// @Access  Private

const deleteHabit = asyncHandler(async (req, res) => {
  const habit = await Habit.findById(req.params.id);

  if (!habit) {
    res.status(400);
    throw new Error("Habit not found");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (habit.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await habit.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getHabits,
  setHabit,
  updateHabit,
  deleteHabit,
};
