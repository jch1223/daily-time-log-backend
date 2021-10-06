const express = require("express");
const router = express.Router();
const { checkSchema } = require("express-validator");

const { milestonesValidation } = require("../validations");
const { milestonesController } = require("../controllers");

router
  .route("/:milestoneId")
  .put(checkSchema(milestonesValidation.updateMilestone), milestonesController.updateMilestone)
  .delete(
    checkSchema(milestonesValidation.paramsMilestoneId),
    milestonesController.deleteMilestone,
  );

module.exports = router;
