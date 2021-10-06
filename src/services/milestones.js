const createError = require("http-errors");

const { Milestone } = require("../models");
const { NOT_MILESTONE } = require("../constant/errorMessage/milestones");

const updateMilestone = async (milestoneId, userBody) => {
  const milestone = await Milestone.findByIdAndUpdate(milestoneId, userBody, { new: true })
    .lean()
    .exec();

  if (!milestone) {
    throw createError(400, NOT_MILESTONE);
  }

  return milestone;
};

const deleteMilestone = async (milestoneId) => {
  return Milestone.findByIdAndUpdate(milestoneId, { isDeleted: true }).lean().exec();
};

module.exports = {
  updateMilestone,
  deleteMilestone,
};
