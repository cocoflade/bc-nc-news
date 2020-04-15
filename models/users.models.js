const connection = require("../db/connection");

exports.selectUsers = () => {
  return connection.select();
};
