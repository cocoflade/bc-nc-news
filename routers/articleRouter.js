const articleRouter = require("express").Router();
const {
  getArticlesByID,
  getArticles,
  updateArticles,
} = require("../controllers/article.controller");

articleRouter.route("/:article_id").get(getArticlesByID).patch(updateArticles); //405
articleRouter.route("/").get(getArticles);

module.exports = articleRouter;
