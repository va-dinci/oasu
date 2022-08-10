const mongoose = require("mongoose");

const habitSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("habit", habitSchema);
