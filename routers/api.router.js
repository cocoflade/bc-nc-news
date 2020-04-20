const apiRouter = require("express").Router();

const topicRouter = require("./topic.router");
const userRouter = require("./user.router");
const articleRouter = require("./article.router");
const commentRouter = require("./comment.router");
const { getEndpoints } = require("../controllers/api.controllers");
const { handle405 } = require("../errors/index.errors");

apiRouter.route("/").get(getEndpoints).all(handle405);

apiRouter.use("/topics", topicRouter);
apiRouter.use("/users", userRouter);
apiRouter.use("/articles", articleRouter);
apiRouter.use("/comments", commentRouter);

module.exports = apiRouter;
