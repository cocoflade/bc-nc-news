const commentRouter = require("express").Router();
const {
  updateComments,
  deleteComments,
} = require("../controllers/comment.controller");

commentRouter
  .route("/:comment_id")
  .patch(updateComments)
  .delete(deleteComments);
// 204

module.exports = commentRouter;
