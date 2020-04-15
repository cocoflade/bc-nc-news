const userRouter = require("express").Router();
const { getUsers } = require("../controllers/user.controllers");

userRouter.route("/").get(getUsers);

module.exports = userRouter;
