const createError = require("http-errors");

const { Users, Schedules, Goals } = require("../models");
const { ALREADY_SIGNED, NOT_SIGNED } = require("../constant/errorMessage/users");

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
  const user = await Users.findByIdAndUpdate(userId, userBody, { new: true }).lean().exec();

  if (!user) {
    throw createError(400, NOT_SIGNED);
  }

  return user;
};

const deleteUser = async (userId) => {
  const user = await Users.findByIdAndDelete(userId).lean().exec();

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

  return schedulesDate;
};

const createSchedulesByUserId = async (userId, scheduleBody) => {
  const user = await Users.findById(userId).lean().exec();

  if (!user) {
    throw createError(400, NOT_SIGNED);
  }

  return Schedules.create({
    userId,
    ...scheduleBody,
  });
};

const getGoalsByUserId = async (userId) => {
  const user = await Users.findById(userId).lean().exec();

  if (!user) {
    throw createError(400, NOT_SIGNED);
  }

  const goalsData = await Goals.find({
    userId,
  });

  return goalsData;
};

const createGoalsByUserId = async (userId, goalBody) => {
  const user = await Users.findById(userId).lean().exec();

  if (!user) {
    throw createError(400, NOT_SIGNED);
  }

  return Goals.create({
    userId,
    ...goalBody,
  });
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getSchedulesByUserId,
  createSchedulesByUserId,
  getGoalsByUserId,
  createGoalsByUserId,
};
