const connection = require("../db/connection");

exports.selectTopics = () => {
  return connection
    .select("*")
    .from("topics")
    .then((topics) => {
      if (topics.length === 0)
        return Promise.reject({ status: 404, msg: "topics do not exist" });
      return topics;
    });
};
