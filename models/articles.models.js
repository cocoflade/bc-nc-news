const connection = require("../db/connection");

exports.selectArticles = ({ article_id }) => {
  return connection
    .select(
      "article_id",
      "title",
      "body",
      "votes",
      "topic",
      "author",
      "created_at"
    )
    .from("articles")
    .modify((queryBuilder) => {
      if (article_id) queryBuilder.where({ article_id });
    });
};
