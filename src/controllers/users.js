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

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
