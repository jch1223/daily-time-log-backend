const catchAsync = require("../utils/catchAsync");
const { userService } = require("../services");

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);

  res.json({
    result: "ok",
    data: {
      userId: user._id,
    },
  });
});

const getUser = catchAsync(async (req, res) => {
  const { userId } = req.params;

  const user = await userService.getUser(userId);

  res.json({
    result: "ok",
    data: user,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const { userId } = req.params;

  await userService.updateUser(userId, req.body);

  res.json({
    result: "ok",
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const { userId } = req.params;

  await userService.deleteUser(userId);

  res.json({
    result: "ok",
  });
});

const getSchedulesByUserId = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const { date } = req.query;

  await userService.getSchedulesByUserId(userId, date);

  res.json({
    result: "ok",
  });
});

const createSchedulesByUserId = catchAsync(async (req, res) => {
  const { userId } = req.params;

  const schedule = await userService.createSchedulesByUserId(userId, req.body);

  console.log(schedule);

  res.json({
    result: "ok",
    data: schedule,
  });
});

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getSchedulesByUserId,
  createSchedulesByUserId,
};
