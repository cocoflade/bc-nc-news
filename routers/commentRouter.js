const commentRouter = require("express").Router();
const {
  updateComments,
  deleteComments,
} = require("../controllers/comment.controller");
const { handle405 } = require("../errors/index.errors");

commentRouter
  .route("/:comment_id")
  .patch(updateComments)
  .delete(deleteComments)
  .all(handle405);
// 204

module.exports = commentRouter;
