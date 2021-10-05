const catchAsync = require("../utils/catchAsync");
const { usersService } = require("../services");

const createUser = catchAsync(async (req, res) => {
  const user = await usersService.createUser(req.body);

  res.json({
    result: "ok",
    data: {
      userId: user._id,
    },
  });
});

const getUser = catchAsync(async (req, res) => {
  const { userId } = req.params;

  const user = await usersService.getUser(userId);

  res.json({
    result: "ok",
    data: user,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const { userId } = req.params;

  await usersService.updateUser(userId, req.body);

  res.json({
    result: "ok",
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const { userId } = req.params;

  await usersService.deleteUser(userId);

  res.json({
    result: "ok",
  });
});

const getSchedulesByUserId = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const { date } = req.query;

  const schedule = await usersService.getSchedulesByUserId(userId, date);

  res.json({
    result: "ok",
    data: schedule,
  });
});

const createSchedulesByUserId = catchAsync(async (req, res) => {
  const { userId } = req.params;

  const schedule = await usersService.createSchedulesByUserId(userId, req.body);

  res.json({
    result: "ok",
    data: schedule,
  });
});

const getGoalsByUserId = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const { date } = req.query;

  const goal = await usersService.getGoalsByUserId(userId, date);

  res.json({
    result: "ok",
    data: goal,
  });
});

const createGoalsByUserId = catchAsync(async (req, res) => {
  const { userId } = req.params;

  const goal = await usersService.createGoalsByUserId(userId, req.body);

  res.json({
    result: "ok",
    data: goal,
  });
});

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
