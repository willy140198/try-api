const Joi = require('@hapi/joi');
const controllers = require('../controllers');

module.exports.index = {
  handler: () =>{
    return 'Hello world';
  },
};

module.exports.addUser = {
  handler: controllers.addUser,
  validate: {
    payload: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.required(),
    },
  },
};

module.exports.userList = {
  handler: controllers.userList,
};

module.exports.updateUser = {
  handler: controllers.updateUser,
  validate: {
    payload: Joi.object({
      id: Joi.number().required(),
    }).options({
      allowUnknown: true,
    }),
  },
};

module.exports.deleteUser = {
  handler: controllers.deleteUser,
  validate: {
    payload: {
      id: Joi.number().required(),
    },
  },
}
