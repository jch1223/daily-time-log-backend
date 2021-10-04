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

UsersSchema.statics.isEmailTaken = async function (email) {
  const user = await this.findOne({ email });
  return !!user;
};

module.exports = mongoose.model("Users", UsersSchema);
