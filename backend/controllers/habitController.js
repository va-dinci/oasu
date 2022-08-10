const asyncHandler = require("express-async-handler");

// @Desc    Get habits
// @Route   GET /api/habits
// @Access  Private
const getHabits = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get habits" });
});

// @Desc    Set a habit
// @Route   POST /api/habits
// @Access  Private
const setHabit = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set a habit" });
});

// @Desc    Update a habit
// @Route   PATCH /api/habits:id
// @Access  Private
const updateHabit = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update habit ${req.params.id}` });
});

// @Desc    Delete a habit
// @Route   DELETE /api/habits:id
// @Access  Private
const deleteHabit = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete habit ${req.params.id}` });
});

module.exports = {
  getHabits,
  setHabit,
  updateHabit,
  deleteHabit,
};
