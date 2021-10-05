const express = require("express");
const router = express.Router();
const { checkSchema } = require("express-validator");

const { usersController } = require("../controllers");
const { usersValidation } = require("../validations");

router.route("/sign-up").post(checkSchema(usersValidation.createUser), usersController.createUser);

router
  .route("/:userId")
  .get(checkSchema(usersValidation.paramsUserId), usersController.getUser)
  .put(checkSchema(usersValidation.updateUser), usersController.updateUser)
  .delete(checkSchema(usersValidation.paramsUserId), usersController.deleteUser);

router
  .route("/:userId/schedules")
  .get(checkSchema(usersValidation.queryDate), usersController.getSchedulesByUserId)
  .post(
    checkSchema(usersValidation.createSchedulesByUserId),
    usersController.createSchedulesByUserId,
  );

router
  .route("/:userId/goals")
  .get(checkSchema(usersValidation.queryDate), usersController.getGoalsByUserId)
  .post(checkSchema(usersValidation.createGoalsByUserId), usersController.createGoalsByUserId);

module.exports = router;
