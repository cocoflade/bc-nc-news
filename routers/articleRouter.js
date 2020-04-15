const articleRouter = require("express").Router();
const { getArticles } = require("../controllers/article.controller");

articleRouter.route("/").get(getArticles);

module.exports = articleRouter;
