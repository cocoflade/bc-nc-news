exports.formatDates = (list) => {
  const correctDateFormat = list.map((input) => {
    let date = new Date(input.created_at);
    const { created_at, ...restOfKeys } = input;
    return { created_at: date, ...restOfKeys };
  });

  return correctDateFormat;
};

exports.makeRefObj = (list) => {
  const lookupObject = {};
  list.forEach((item) => {
    lookupObject[item.title] = item.article_id;
  });
  return lookupObject;
};

exports.formatComments = (comments, articleRef) => {};
