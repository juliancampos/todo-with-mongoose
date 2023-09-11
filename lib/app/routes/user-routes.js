const { userController } = require('../controllers');

module.exports = (app) => {
   app.post('/user', userController.post);
   app.get('/user', userController.getAll);
}
