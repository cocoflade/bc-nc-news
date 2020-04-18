const commentRouter = require("express").Router();
const {
  patchCommentVotes,
  deleteComments,
} = require("../controllers/comment.controllers");
const { handle405 } = require("../errors/index.errors");

commentRouter
  .route("/:comment_id")
  .patch(patchCommentVotes)
  .delete(deleteComments)
  .all(handle405);

module.exports = commentRouter;
