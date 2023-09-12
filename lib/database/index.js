const mongoose = require('mongoose');
const config = require('../common/config');
const logger = require('../common/logger');

let database;

const connect = async () => {
   if (database) {
      return;
   }

   const result = await mongoose.connect(config.DATABASE_URL);
   logger.info('Database connected!');
   database = result;
   return true;
}

module.exports = {
   connect
};
