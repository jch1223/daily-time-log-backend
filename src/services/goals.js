const createError = require("http-errors");

const { Goals } = require("../models");
const { NOT_GOAL } = require("../constant/errorMessage/goals");

const updateGoal = async (goalId, userBody) => {
  const goal = await Goals.findByIdAndUpdate(goalId, userBody, { new: true }).lean().exec();

  if (!goal) {
    throw createError(400, NOT_GOAL);
  }

  return goal;
};

const deleteGoal = async (goalId) => {
  return Goals.findByIdAndDelete(goalId).lean().exec();
};

module.exports = {
  updateGoal,
  deleteGoal,
};
