const userRouter = require("express").Router();
const { getUsers } = require("../controllers/user.controllers");
const { handle405 } = require("../errors/index.errors");

userRouter.route("/").get(getUsers).all(handle405);

module.exports = userRouter;
