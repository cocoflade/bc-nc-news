const articleRouter = require("express").Router();
const {
  getArticlesByID,
  getArticles,
  updateArticles,
  postArticles,
  getArtComments,
} = require("../controllers/article.controller");
const { handle405 } = require("../errors/index.errors");

articleRouter
  .route("/:article_id")
  .get(getArticlesByID)
  .patch(updateArticles)
  .all(handle405);

articleRouter
  .route("/:article_id/comments")
  .post(postArticles)
  .get(getArtComments)
  .all(handle405);

articleRouter.route("/").get(getArticles).all(handle405);

module.exports = articleRouter;
