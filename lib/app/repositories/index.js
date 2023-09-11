const UserModel = require("../../database/models/user-model")

let model;

const save = async (data) => {
   const newData = model(data);
   const result = await newData.save();
   return result;
}

function findAll() {
   const result = model.find({});
   return result;
}

module.exports = (modelRef) => {
   model = modelRef;

   return {
      findAll,
      save
   }
}
