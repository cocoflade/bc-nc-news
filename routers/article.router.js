const articleRouter = require("express").Router();
const {
  getArticlesByID,
  getArticles,
  patchArticleVotes,
  postArticleComment,
  getArticleComments,
} = require("../controllers/article.controllers");
const { handle405 } = require("../errors/index.errors");

articleRouter
  .route("/:article_id")
  .get(getArticlesByID)
  .patch(patchArticleVotes)
  .all(handle405);

articleRouter
  .route("/:article_id/comments")
  .post(postArticleComment)
  .get(getArticleComments)
  .all(handle405);

articleRouter.route("/").get(getArticles).all(handle405);

module.exports = articleRouter;
