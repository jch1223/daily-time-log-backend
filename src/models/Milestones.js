const mongoose = require("mongoose");

const MilestoneSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      ref: "Users",
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    runningTimesIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Goals",
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Milestones", MilestoneSchema);
