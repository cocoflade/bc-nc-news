exports.handle404 = () => {
  res.status(404).send({ msg: "username does not exist" });
};
