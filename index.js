const server = require('./lib/server');
const database = require('./lib/database');
const logger = require('./lib/common/logger');

(async function startServer() {
   try {
      await database.connect();
      await server.start();
   } catch (error) {
      logger.error(error);      
   }
})();
