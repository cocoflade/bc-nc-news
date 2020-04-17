const {
  selectArticlesByID,
  selectArticles,
  editArticles,
  addArticles,
} = require("../models/articles.models");

exports.getArticlesByID = (req, res, next) => {
  selectArticlesByID(req.params)
    .then((articles) => {
      res.status(200).send({ articles });
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

exports.updateArticles = (req, res, next) => {
  const { article_id } = req.params;
  const { inc_votes } = req.body;

  editArticles(article_id, inc_votes)
    .then((article) => {
      res.status(200).send({ article });
    })
    .catch(next);
};

exports.postArticles = (req, res, next) => {
  const { article_id } = req.params;
  const comment = req.body;

  addArticles(article_id, comment)
    .then((comment) => {
      console.log(comment);
      res.status(201).send({ comment });
    })
    .catch(next);
  console.log(err);
};
