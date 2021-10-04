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

module.exports = {
  createUser,
};
