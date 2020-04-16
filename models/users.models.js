const connection = require("../db/connection");

// exports.selectUsers = (query) => {
//   return connection("users")
//     .select("username", "avatar_url", "name")
//     .where(query);
// };

exports.selectUsers = ({ username }) => {
  return connection("users")
    .select("username", "avatar_url", "name")
    .modify((queryBuilder) => {
      if (username) queryBuilder.where({ username });
    })
    .then((users) => {
      if (users.length === 0)
        return Promise.reject({ status: 404, msg: "username does not exist" });
      return users;
    });
};
