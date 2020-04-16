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
    })
    .then((articles) => {
      if (articles.length === 0)
        return Promise.reject({
          status: 404,
          msg: "article_id does not exist",
        });
      return articles;
    });
};
