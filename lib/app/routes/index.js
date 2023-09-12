const taskRoutes = require('./task-routes');
const userRoutes = require('./user-routes');

module.exports = (app) => {
   userRoutes(app);
   taskRoutes(app);
}
