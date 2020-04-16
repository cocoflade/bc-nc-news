const articleRouter = require("express").Router();
const {
  getArticlesByID,
  getArticles,
} = require("../controllers/article.controller");

articleRouter.route("/:article_id").get(getArticlesByID);
articleRouter.route("/").get(getArticles);

module.exports = articleRouter;
