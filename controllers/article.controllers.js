const {
  selectArticlesByID,
  selectArticles,
  updateArticleVotes,
  addArticleComment,
  selectArticleComments,
} = require("../models/article.models");

exports.getArticlesByID = (req, res, next) => {
  selectArticlesByID(req.params)
    .then((article) => {
      res.status(200).send({ article });
    })
    .catch(next);
};

exports.getArticles = (req, res, next) => {
  selectArticles(req.query)
    .then((articles) => {
      res.status(200).send({ articles });
    })
    .catch(next);
};

exports.patchArticleVotes = (req, res, next) => {
  const { article_id } = req.params;
  const { inc_votes } = req.body;

  updateArticleVotes(article_id, inc_votes)
    .then((article) => {
      res.status(200).send({ article });
    })
    .catch(next);
};

exports.postArticleComment = (req, res, next) => {
  const { article_id } = req.params;
  const comment = req.body;

  addArticleComment(article_id, comment)
    .then((comment) => {
      res.status(201).send({ comment });
    })
    .catch(next);
};

exports.getArticleComments = (req, res, next) => {
  const article_id = req.params;
  const sorted = req.query;

  selectArticleComments(article_id, sorted)
    .then((comments) => {
      res.status(200).send({ comments });
    })
    .catch(next);
};
