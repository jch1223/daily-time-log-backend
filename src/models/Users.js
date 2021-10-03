const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
    },
    themeColor: {
      type: String,
    },
    workTime: {
      startTime: {
        type: Date,
      },
      endTime: {
        type: Date,
      },
    },
    accessToken: {
      type: String,
    },
    googleSync: {
      type: Boolean,
    },
    sleepTime: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Users", UsersSchema);
