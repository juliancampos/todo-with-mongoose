require('dotenv').config();
const packageData = require('../../../package.json');

const serviceName = packageData.name;

const config = {
   PORT,
   DATABASE_URL
} = process.env;



module.exports = {
   ...config,
   serviceName
};

