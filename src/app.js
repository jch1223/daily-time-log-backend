require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const createError = require("http-errors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const { errorHandler } = require("./middlewares/error");

const app = express();

require("./database/connection");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use(errorHandler);

module.exports = app;
