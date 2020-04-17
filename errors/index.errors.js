// exports.handlePSQLErrors = (err, req, res, next) => {
//   const codes = { '22P02': { status: 400, msg: 'posting value of incorrect type' }, 42703: { status: 400, msg: 'attempting to add non-existent columns' } };
//   if (err.code in codes) {
//       const { msg, status } = codes[err.code];
//       res.status(status).send({ msg });
//   }
// }

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

exports.handle405 = (req, res, next) => {
  res.status(405).send({ msg: "405 method not allowed" });
};
