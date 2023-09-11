const logger = require("../../../common/logger");

const getAll = (req, res) => {
   try {
      res.sendStatus(204);
   } catch (error) {
      res.status(500).json(error.message);
   }
};


const save = async (data) => {
   const newUser = UserModel(data);
   const result = await newUser.save();
   return result;
}

module.exports = {
   getAll,
   save
};
