
const UserModel = require('../../database/models/user-model');
const userRepository = require('../repositories')(UserModel);


const create = () => {
}

const findAll = () => {
   const result = userRepository.findAll();
   return result;
}

module.exports = {
   create,
   findAll
}
