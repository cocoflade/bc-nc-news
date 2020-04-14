const {
  topicData,
  articleData,
  commentData,
  userData,
} = require("../data/index.js");
const { formatDates, formatComments, makeRefObj } = require("../utils/utils");

exports.seed = function (knex) {
  const topicsInsertions = knex("topics").insert(topicData);
  const usersInsertions = knex("users").insert(userData);

  return Promise.all([topicsInsertions, usersInsertions])
    .then(() => {
      const formattedArticleData = formatDates(articleData);
      return knex("articles").insert(formattedArticleData).returning("*");
      // Your comment insertions will depend on information from the seeded articles, so make sure to return the data after it's been seeded.
    })
    .then((articleRows) => {
      /* 

      Your comment data is currently in the incorrect format and will violate your SQL schema. 

      Keys need renaming, values need changing, and most annoyingly, your comments currently only refer to the title of the article they belong to, not the id. 
      
      You will need to write and test the provided makeRefObj and formatComments utility functions to be able insert your comment data.
      */

      const articleRef = makeRefObj(articleRows);
      const formattedComments = formatComments(commentData, articleRef);
      return knex("comments").insert(formattedComments);
    });
};

// body:
// 'The beautiful thing about treasure is that it exists. Got to find out what kind of sheets these are; not cotton, not rayon, silky.',
// belongs_to: 'Living in the shadow of a great man',
// created_by: 'butter_bridge',
// votes: 14,
// created_at: 1479818163389,
