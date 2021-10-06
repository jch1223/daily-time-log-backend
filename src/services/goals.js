const Goals = require("../models/Goals");
const createError = require("http-errors");

const { NOT_GOALS } = require("../constant/errorMessage/goals");

const createGoal = async (milestoneId, goalBody) => {
  return Goals.create({
    milestoneId,
    ...goalBody,
  });
};

const updateGoal = async (goalId, goalBody) => {
  const goal = await Goals.findByIdAndUpdate(goalId, goalBody, { new: true }).lean().exec();

  if (!goal) {
    throw createError(400, NOT_GOALS);
  }

  return goal;
};

const deleteGoal = async (goalId) => {
  return Goals.findByIdAndUpdate(goalId, { isDeleted: true }).lean().exec();
};

module.exports = {
  createGoal,
  updateGoal,
  deleteGoal,
};
