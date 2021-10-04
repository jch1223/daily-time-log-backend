const { NOT_EMAIL, INVALID_EMAIL, NOT_ACCESS_TOKEN } = require("../constant/errorMsg");

const createUser = {
  email: {
    notEmpty: {
      errorMessage: NOT_EMAIL,
      bail: true,
    },
    isEmail: {
      errorMessage: INVALID_EMAIL,
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
      errorMessage: NOT_ACCESS_TOKEN,
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

const paramsUserId = {
  userId: {
    notEmpty: {
      errorMessage: NOT_EMAIL,
      bail: true,
    },
    isEmail: {
      errorMessage: INVALID_EMAIL,
      bail: true,
    },
  },
};

const updateUser = {
  userId: {
    notEmpty: {
      errorMessage: NOT_EMAIL,
      bail: true,
    },
    isEmail: {
      errorMessage: INVALID_EMAIL,
      bail: true,
    },
  },
  "workTime.startTime": {
    isISO8601: {
      errorMessage: "startTime이 date 형식이 아닙니다.",
      bail: true,
    },
    optional: {
      options: {
        checkFalsy: true,
      },
    },
  },
  "workTime.endTime": {
    isDate: {
      errorMessage: "endTime이 date 형식이 아닙니다.",
      bail: true,
    },
    optional: {
      options: {
        checkFalsy: true,
      },
    },
  },
  accessToken: {
    notEmpty: {
      errorMessage: NOT_ACCESS_TOKEN,
      bail: true,
    },
    optional: {
      options: {
        checkFalsy: true,
      },
    },
  },
  googleSync: {
    isBoolean: {
      errorMessage: "googleSync가 boolean 형식이 아닙니다.",
      bail: true,
    },
    optional: {
      options: {
        checkFalsy: true,
      },
    },
  },
  sleepTime: {
    isNumeric: {
      errorMessage: "sleepTime이 number 형식이 아닙니다.",
      bail: true,
    },
    optional: {
      options: {
        checkFalsy: true,
      },
    },
  },
};

module.exports = {
  createUser,
  paramsUserId,
  updateUser,
};
