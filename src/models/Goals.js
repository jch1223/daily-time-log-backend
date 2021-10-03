const mongoose = require("mongoose");

const GoalsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: true,
    },
    runningTimes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "RunningGoals",
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Goals", GoalsSchema);
