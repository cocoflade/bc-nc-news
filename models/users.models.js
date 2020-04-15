const connection = require("../db/connection");

// exports.selectUsers = (query) => {
//   return connection("users")
//     .select("username", "avatar_url", "name")
//     .where(query);
// };

exports.selectUsers = ({ username }) => {
  return connection
    .select("username", "avatar_url", "name")
    .from("users")
    .modify((queryBuilder) => {
      if (username) queryBuilder.where({ username });
    });
};
