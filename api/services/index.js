const Models = require('./../../models');

module.exports.addUser = async (data) => {
  console.log(`Add user data ${data.name}`);
  let user = await Models.User.create(
    {
      name: data.name,
      email: data.email,
      password: data.password,
    },
  );
  return user;
};

module.exports.userList = async () =>{
  let userList = await Models.User.findAll(
    {
      attributes: [
        'id',
        'name',
        'email',
      ],
    },
  );
  console.log(userList);
  return userList;
};

module.exports.updateUser = async (id, data) => {
  let user = await Models.User.update(
    data,
    {
      where: {
        id,
      },
    },
  );
  return user;
};

module.exports.deleteUser = async (id) => {
  let res = await Models.User.destroy(
    {
      where: {
        id,
      },
    },
  );
  return res;
};
