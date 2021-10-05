const express = require("express");
const router = express.Router();
const { checkSchema } = require("express-validator");

const { userController } = require("../controllers");
const { userValidation } = require("../validations");

router.route("/sign-up").post(checkSchema(userValidation.createUser), userController.createUser);

router
  .route("/:userId")
  .get(checkSchema(userValidation.paramsUserId), userController.getUser)
  .put(checkSchema(userValidation.updateUser), userController.updateUser)
  .delete(checkSchema(userValidation.paramsUserId), userController.deleteUser);

router
  .route("/:userId/schedules")
  .get(checkSchema(userValidation.queryDate), userController.getSchedulesByUserId)
  .post(
    checkSchema(userValidation.createSchedulesByUserId),
    userController.createSchedulesByUserId,
  );

module.exports = router;
