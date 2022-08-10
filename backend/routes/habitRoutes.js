const express = require("express");
const router = express.Router();
const {
  getHabits,
  setHabit,
  updateHabit,
  deleteHabit,
} = require("../controllers/habitController");

router.route("/").get(getHabits).post(setHabit);
router.route("/:id").put(updateHabit).delete(deleteHabit);

module.exports = router;
