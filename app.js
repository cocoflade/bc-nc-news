const express = require("express");
const app = express();
const apiRouter = require("./routers/api.router");
const {
  handlePSQLErrors,
  handle500,
  handleCustomErrors,
  handle404,
  handleTeapot,
} = require("./errors/index.errors");

app.use(express.json());

app.use("/api", apiRouter);
app.all("/*", handle404);
app.use(handlePSQLErrors);
app.use(handleCustomErrors);
app.use(handle500);
app.use(handleTeapot);

module.exports = app;
