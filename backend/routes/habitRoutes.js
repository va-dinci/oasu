const express = require("express");
const router = express.Router();
const {
  getHabits,
  setHabit,
  updateHabit,
  deleteHabit,
} = require("../controllers/habitController");

router.route("/").get(getHabits).post(setHabit);
router.route("/:id").patch(updateHabit).delete(deleteHabit);

module.exports = router;
