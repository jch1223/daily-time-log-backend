const createUser = {
  email: {
    notEmpty: {
      errorMessage: "email이 없습니다.",
      bail: true,
    },
    isEmail: {
      errorMessage: "유효한 이메일 형식이 아닙니다.",
      bail: true,
    },
  },
  name: {
    default: { options: null },
  },
  themeColor: {
    default: { options: "white" },
  },
  workTime: {
    default: {
      options: {
        startTime: null,
        endTime: null,
      },
    },
  },
  accessToken: {
    notEmpty: {
      errorMessage: "accessToken이 없습니다.",
      bail: true,
    },
  },
  googleSync: {
    default: { options: false },
  },
  sleepTime: {
    default: { options: 0 },
  },
};

module.exports = {
  createUser,
};
