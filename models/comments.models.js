const connection = require("../db/connection");

exports.editComments = (comment_id, inc_votes) => {
  return connection("comments")
    .increment("votes", inc_votes)
    .where({ comment_id })
    .returning("*")
    .then((comment) => {
      if (comment.length === 0)
        return Promise.reject({
          status: 404,
          msg: "comment_id does not exist",
        });
      return comment[0];
    });
};
