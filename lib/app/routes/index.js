const todoRoutes = require('./todo-routes');
const userRoutes = require('./user-routes');

module.exports = (app) => {
   userRoutes(app);
   todoRoutes(app);
}
