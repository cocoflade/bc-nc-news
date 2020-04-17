const express = require("express");
const app = express();
const apiRouter = require("./routers/apiRouter");
const {
  handlePSQLErrors,
  handle500,
  handleCustomErrors,
  handle404,
} = require("./errors/index.errors");

app.use(express.json());

app.use("/api", apiRouter);
app.all("/*", handle404);
app.use(handlePSQLErrors);
app.use(handleCustomErrors);
app.use(handle500);

module.exports = app;
