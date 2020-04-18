const { selectUsers } = require("../models/user.models");

exports.getUsers = (req, res, next) => {
  selectUsers(req.query)
    .then((users) => {
      res.status(200).send({ users });
    })
    .catch(next);
};
