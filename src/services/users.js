const createError = require("http-errors");

const { Users } = require("../models");
const { ALREADY_SIGNED, NOT_SIGNED } = require("../constant/errorMsg");

const createUser = async (userBody) => {
  if (await Users.isEmailTaken(userBody.email)) {
    throw createError(400, ALREADY_SIGNED);
  }

  return Users.create(userBody);
};

const getUser = async (userId) => {
  const user = await Users.findOne({ email: userId }).lean().exec();

  if (!user) {
    throw createError(400, NOT_SIGNED);
  }

  return user;
};

const updateUser = async (userId, userBody) => {
  const user = await Users.findOneAndUpdate({ email: userId }, userBody).lean().exec();

  if (!user) {
    throw createError(400, NOT_SIGNED);
  }

  return user;
};

const deleteUser = async (userId, userBody) => {
  const user = await Users.findOneAndDelete({ email: userId }, userBody).lean().exec();

  if (!user) {
    throw createError(400, NOT_SIGNED);
  }

  return user;
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
