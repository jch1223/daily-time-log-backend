const {
  NOT_EMAIL,
  NOT_USER_ID,
  NOT_ACCESS_TOKEN,
  INVALID_EMAIL,
  INVALID_MONGO_ID,
  INVALID_DATE,
  INVALID_BOOLEAN,
  INVALID_NUMERIC,
} = require("../constant/errorMsg");

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
      errorMessage: NOT_USER_ID,
      bail: true,
    },
    isMongoId: {
      errorMessage: INVALID_MONGO_ID,
      bail: true,
    },
  },
};

const updateUser = {
  userId: {
    notEmpty: {
      errorMessage: NOT_USER_ID,
      bail: true,
    },
    isMongoId: {
      errorMessage: INVALID_MONGO_ID,
      bail: true,
    },
  },
  "workTime.startTime": {
    isISO8601: {
      errorMessage: `startTime이 ${INVALID_DATE}`,
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
      errorMessage: `endTime이 ${INVALID_DATE}`,
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
      errorMessage: `googleSync가 ${INVALID_BOOLEAN}`,
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
      errorMessage: `sleepTime이 ${INVALID_NUMERIC}`,
      bail: true,
    },
    optional: {
      options: {
        checkFalsy: true,
      },
    },
  },
};

const queryDate = {
  userId: {
    notEmpty: {
      errorMessage: NOT_USER_ID,
      bail: true,
    },
    isMongoId: {
      errorMessage: INVALID_MONGO_ID,
      bail: true,
    },
  },
  date: {
    isISO8601: {
      errorMessage: `query date ${INVALID_DATE}`,
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
  queryDate,
};
