// exports.handlePSQLErrors = (err, req, res, next) => {
//   const codes = {
//     "42702": { status: 400, msg: "column reference is ambiguous" },
//   };
//   if (err.code in codes) {
//     const { status, msg } = codes[err.code];
//     res.status(status).send({ msg });
//   } else {
//     next(err);
//   }
// };

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
