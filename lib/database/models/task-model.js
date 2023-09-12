const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
   name:  String,
   user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User'
   }
});

module.exports = mongoose.model('Task', taskSchema);
