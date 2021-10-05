const {
  INVALID_MONGO_ID,
  INVALID_BOOLEAN,
  INVALID_STRING,
} = require("../constant/errorMessage/invalid");
const { NOT_GOALS_ID, NOT_SUMMARY } = require("../constant/errorMessage/goals");

const paramsGoalId = {
  goalId: {
    notEmpty: {
      errorMessage: NOT_GOALS_ID,
      bail: true,
    },
    isMongoId: {
      errorMessage: INVALID_MONGO_ID,
      bail: true,
    },
  },
};

const updateGoal = {
  goalId: {
    notEmpty: {
      errorMessage: NOT_GOALS_ID,
      bail: true,
    },
    isMongoId: {
      errorMessage: INVALID_MONGO_ID,
      bail: true,
    },
  },
  summary: {
    notEmpty: {
      errorMessage: NOT_SUMMARY,
      bail: true,
    },
    isString: {
      errorMessage: `summary가 ${INVALID_STRING}`,
      bail: true,
    },
  },
  done: {
    isBoolean: {
      errorMessage: `done이 ${INVALID_BOOLEAN}`,
      bail: true,
    },
    optional: {
      options: {
        checkFalsy: true,
      },
    },
  },
  isDeleted: {
    isBoolean: {
      errorMessage: `isDeleted가 ${INVALID_BOOLEAN}`,
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
  paramsGoalId,
  updateGoal,
};
