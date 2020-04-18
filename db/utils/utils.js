exports.formatDates = (list) => {
  const correctDateFormat = list.map((input) => {
    const date = new Date(input.created_at);
    const { created_at, ...restOfKeys } = input;
    return { created_at: date, ...restOfKeys };
  });

  return correctDateFormat;
};

exports.makeRefObject = (list) => {
  const lookupObject = {};
  list.forEach((item) => {
    lookupObject[item.title] = item.article_id;
  });
  return lookupObject;
};

exports.formatComments = (comments, articleRef) => {
  const formattedComments = comments.map((comment) => {
    const editComment = { ...comment };
    editComment.article_id = articleRef[editComment.belongs_to];
    editComment.author = editComment.created_by;
    delete editComment.created_by;
    delete editComment.belongs_to;
    editComment.created_at = new Date(editComment.created_at);

    return editComment;
  });
  return formattedComments;
};
