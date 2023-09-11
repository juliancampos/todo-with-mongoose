const { todoController } = require('../controllers');

module.exports = (app) => {
   app.get('/todo', todoController.getAll);
}
