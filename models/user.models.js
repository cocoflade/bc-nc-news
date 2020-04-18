const connection = require("../db/connection");

exports.selectUsersByUsername = ({ username }) => {
  return connection("users")
    .select("username", "avatar_url", "name")
    .where({ username })
    .then((user) => {
      if (user.length === 0)
        return Promise.reject({
          status: 404,
          msg: "username does not exist",
        });
      return user[0];
    });
};

exports.selectUsers = () => {
  return connection("users")
    .select("*")
    .then((users) => {
      if (users.length === 0)
        return Promise.reject({ status: 404, msg: "users do not exist" });
      return users;
    });
};
