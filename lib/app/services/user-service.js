
const UserModel = require('../../database/models/user-model');
const userRepository = require('../repositories')(UserModel);


const create = (data) => {
   const newUser = UserModel(data);
   const result = userRepository.save
}

const findAll = () => {
   const result = userRepository.findAll();
   return result;
}

module.exports = {
   create,
   findAll
}
