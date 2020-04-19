exports.handlePSQLErrors = (err, req, res, next) => {
  const codes = {
    "22P02": { status: 400, msg: "Posting value of incorrect type" },
    42703: { status: 400, msg: "Column not found" },
    23502: { status: 400, msg: "Missing required columns" },
    23503: { status: 422, msg: "Unprocessable entity" },
  };
  if (err.code in codes) {
    const { msg, status } = codes[err.code];
    res.status(status).send({ msg });
  } else {
    next(err);
  }
};

exports.handleCustomErrors = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    next(err);
  }
};

exports.handle500 = (err, req, res, next) => {
  console.log(err, "unhnandled error");
  res
    .status(500)
    .send({ msg: "We apologise for the delay, this will be fixed shortly" });
};

exports.handle404 = (req, res, next) => {
  res.status(404).send({ msg: "Route not found" });
};

exports.handle405 = (req, res, next) => {
  res.status(405).send({ msg: "405 method not allowed" });
};
