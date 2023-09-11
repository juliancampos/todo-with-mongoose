const logger = require('../../../common/logger');
const userRepository = require('../../repositories');
const userService = require('../../services/user-service');

const getAll = async (req, res) => {
   try {
      const result = await userService.findAll();
      res.status(200).json(result);
   } catch (error) {
      res.status(500).json(error.message);
   }
};

const post = async (req, res) => {
   try {
      console.log(req.body);
      const result = await userRepository.save(req.body);
      res.status(200).json(result);
   } catch (error) {
      res.status(500).json(error.message);
   }
};

module.exports = {
   getAll,
   post
};
