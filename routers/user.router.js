const userRouter = require("express").Router();
const {
  getUsers,
  getUsersByUsername,
} = require("../controllers/user.controllers");
const { handle405 } = require("../errors/index.errors");

userRouter.route("/").get(getUsers).all(handle405);

userRouter.route("/:username").get(getUsersByUsername).all(handle405);

module.exports = userRouter;
