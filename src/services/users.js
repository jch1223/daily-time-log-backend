const createError = require("http-errors");

const { Users } = require("../models");
const { ALREADY_SIGNED } = require("../constant/errorMsg");

const createUser = async (userBody) => {
  if (await Users.isEmailTaken(userBody.email)) {
    throw new createError(400, ALREADY_SIGNED);
  }

  return Users.create(userBody);
};

module.exports = {
  createUser,
};
