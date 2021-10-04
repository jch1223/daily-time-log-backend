const createError = require("http-errors");

const { Users, Schedules } = require("../models");
const { ALREADY_SIGNED, NOT_SIGNED } = require("../constant/errorMsg");

const createUser = async (userBody) => {
  if (await Users.isEmailTaken(userBody.email)) {
    throw createError(400, ALREADY_SIGNED);
  }

  return Users.create(userBody);
};

const getUser = async (userId) => {
  const user = await Users.findById(userId).lean().exec();

  if (!user) {
    throw createError(400, NOT_SIGNED);
  }

  return user;
};

const updateUser = async (userId, userBody) => {
  const user = await Users.findByIdAndUpdate(userId, userBody).lean().exec();

  if (!user) {
    throw createError(400, NOT_SIGNED);
  }

  return user;
};

const deleteUser = async (userId, userBody) => {
  const user = await Users.findByIdAndDelete(userId, userBody).lean().exec();

  if (!user) {
    throw createError(400, NOT_SIGNED);
  }

  return user;
};

const getSchedulesByUserId = async (userId, date) => {
  const user = await Users.findById(userId).lean().exec();

  if (!user) {
    throw createError(400, NOT_SIGNED);
  }

  const schedulesDate = await Schedules.find({
    userId,
    start: { date: { $gte: new Date(date).toISOString() } },
  });

  console.log(schedulesDate);
  return schedulesDate;
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getSchedulesByUserId,
};
