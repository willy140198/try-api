const Services = require('./../services');

module.exports.addUser = async (req, h) => {
  const res = await Services.addUser(req.payload);
  return res;
};

module.exports.userList = async (req, h) => {
  const res = await Services.userList();
  return res;
};

module.exports.updateUser = async (req, h) => {
  let id = req.payload.id;
  delete req.payload.id;
  const res = await Services.updateUser(id, req.payload);
  return res;
};

module.exports.deleteUser = async (req, h) => {
  console.log(req.payload);
  const res = await Services.deleteUser(req.payload.id);
  return res;
};
