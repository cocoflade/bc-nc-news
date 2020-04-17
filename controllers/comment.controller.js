const { editComments, removeComments } = require("../models/comments.models");

exports.updateComments = (req, res, next) => {
  const { comment_id } = req.params;
  const { inc_votes } = req.body;
  editComments(comment_id, inc_votes)
    .then((comment) => {
      res.status(200).send({ comment });
    })
    .catch(next);
};

exports.deleteComments = (req, res, next) => {
  const { comment_id } = req.params;
  removeComments(comment_id)
    .then(() => {
      res.status(204).send();
    })
    .catch(next);
};
