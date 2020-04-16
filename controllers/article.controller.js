const {
  selectArticlesByID,
  selectArticles,
} = require("../models/articles.models");

exports.getArticlesByID = (req, res, next) => {
  console.log(req.params);
  selectArticlesByID(req.params)
    .then((articles) => {
      console.log(articles);
      res.status(200).send({ articles });
    })
    .catch(next);
};

exports.getArticles = (req, res, next) => {
  selectArticles()
    .then((articles) => {
      res.status(200).send({ articles });
    })
    .catch(next);
};
