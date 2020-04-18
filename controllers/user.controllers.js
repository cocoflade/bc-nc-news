const { selectUsers, selectUsersByUsername } = require("../models/user.models");

exports.getUsersByUsername = (req, res, next) => {
  selectUsersByUsername(req.params)
    .then((user) => {
      res.status(200).send({ user: { user } });
    })
    .catch(next);
};

exports.getUsers = (req, res, next) => {
  selectUsers()
    .then((users) => {
      res.status(200).send({ users });
    })
    .catch(next);
};
