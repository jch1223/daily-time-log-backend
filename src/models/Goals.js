const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema(
  {
    milestoneId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Milestone",
      required: true,
    },
    done: {
      type: Boolean,
    },
    summary: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
    },
    start: {
      date: {
        type: Date,
      },
      dateTime: {
        type: Date,
      },
      timeZone: {
        type: String,
      },
    },
    end: {
      date: {
        type: Date,
      },
      dateTime: {
        type: Date,
      },
      timeZone: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Goals", GoalSchema);
