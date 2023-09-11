const config = require('../common/config');
const express = require('express');
const logger = require('../common/logger');
const routes = require('../app/routes');

const app = express();

const start = async () => {
	const port = config.PORT;

	// app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	routes(app);

	app.listen(port, () => {
		logger.info(`running at port: ${port}`)
	});
}

const stop = () => {
	app.stop();
}

module.exports = {
   start,
   stop
}