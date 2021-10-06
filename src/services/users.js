const createError = require("http-errors");

const { Users, Schedules, Milestones } = require("../models");
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

const getMilestonesByUserId = async (userId) => {
  const user = await Users.findById(userId).lean().exec();

  if (!user) {
    throw createError(400, NOT_SIGNED);
  }

  const milestoneData = await Milestones.find({
    userId,
  });

  return milestoneData;
};

const createMilestonesByUserId = async (userId, milestoneBody) => {
  const user = await Users.findById(userId).lean().exec();

  if (!user) {
    throw createError(400, NOT_SIGNED);
  }

  return Milestones.create({
    userId,
    ...milestoneBody,
  });
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getSchedulesByUserId,
  createSchedulesByUserId,
  getMilestonesByUserId,
  createMilestonesByUserId,
};
