const { selectUsers, selectUsersByUsername } = require("../models/user.models");

exports.getUsers = (req, res, next) => {
  selectUsers()
    .then((users) => {
      res.status(200).send({ users });
    })
    .catch(next);
};

exports.getUsersByUsername = (req, res, next) => {
  selectUsersByUsername(req.query)
    .then((user) => {
      res.status(200).send({ user });
    })
    .catch(next);
};
