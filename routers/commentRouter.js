const commentRouter = require("express").Router();
const { updateComments } = require("../controllers/comment.controller");

commentRouter.route("/:comment_id").patch(updateComments);

module.exports = commentRouter;
