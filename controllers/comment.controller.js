const { editComments } = require("../models/comments.models");

exports.updateComments = (req, res, next) => {
  const { comment_id } = req.params;
  const { inc_votes } = req.body;
  editComments(comment_id, inc_votes)
    .then((comment) => {
      res.status(200).send({ comment });
    })
    .catch(next);
};
