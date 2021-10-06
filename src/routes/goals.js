const express = require("express");
const router = express.Router();
const { checkSchema } = require("express-validator");

const { runningMilestoneValidation } = require("../validations");
const { runningMilestoneController } = require("../controllers");

router.route("/:milestoneId").post().put().delete();

module.exports = router;
