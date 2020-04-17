const connection = require("../db/connection");

exports.selectArticlesByID = ({ article_id }) => {
  return connection
    .select("articles.*")
    .from("articles")
    .leftJoin("comments", "comments.article_id", "articles.article_id")
    .groupBy("articles.article_id")
    .count("comment_id as comment_count")
    .where({ "articles.article_id": article_id })
    .then((articles) => {
      if (articles.length === 0)
        return Promise.reject({
          status: 404,
          msg: "article_id does not exist",
        });
      return articles[0];
    })
    .then((article) => {
      if (article.length === 0)
        return Promise.reject({ status: 404, msg: "article does not exist" });
      return article;
    });
};

exports.selectArticles = ({
  sorted = "created_at",
  ordered = "desc",
  author,
  topic,
}) => {
  return connection
    .select("articles.*")
    .from("articles")
    .leftJoin("comments", "comments.article_id", "articles.article_id")
    .groupBy("articles.article_id")
    .count("comment_id as comment_count")
    .orderBy(sorted, ordered)
    .modify((queryBuilder) => {
      if (author) queryBuilder.where({ "articles.author": author });
    })
    .modify((queryBuilder) => {
      if (topic) queryBuilder.where({ "articles.topic": topic });
    })
    .then((articles) => {
      if (articles.length === 0)
        return Promise.reject({ status: 404, msg: "articles do not exist" });
      return articles;
    });
};

exports.editArticles = (article_id, inc_votes) => {
  return connection("articles")
    .increment("votes", inc_votes)
    .where({ article_id })
    .returning("*")
    .then((article) => {
      if (article.length === 0)
        return Promise.reject({
          status: 404,
          msg: "article_id does not exist",
        });
      return article[0];
    });
};

exports.addArticles = (article_id, comment) => {
  const commentToAdd = {
    article_id: article_id,
    author: comment.username,
    body: comment.body,
  };
  return connection
    .insert(commentToAdd)
    .into("comments")
    .returning("*")
    .then((comment) => {
      return comment[0];
    });
};

exports.selectArtComments = (article_id) => {
  return connection("comments")
    .select("*")
    .where({ article_id })
    .then((comments) => {
      if (comments.length === 0)
        return Promise.reject({
          status: 404,
          msg: "article_id does not exist",
        });
      return comments;
    });
};
