const { todoController, userController } = require('../controllers');

module.exports = (app) => {
   app.get('/', todoController.getAll);
   app.post('/user', userController.post);
   app.get('/user', userController.getAll);
}
