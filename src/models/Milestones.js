const mongoose = require("mongoose");

const MilestoneSchema = new mongoose.Schema(
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
        ref: "Goal",
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Milestones", MilestoneSchema);
