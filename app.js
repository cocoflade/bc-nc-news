const express = require("express");
const app = express();
const apiRouter = require("./routers/apiRouter");
const { handle404 } = require("./errors/index.errors");

app.use(express.json());

app.use("/api", apiRouter);
app.use(handle404);

module.exports = app;
