class Repository {
   constructor(model) {
      this.model = model;
   }
   
   async save(data) {
      const newData = this.model(data);
      const result = await newData.save();
      return result;
   }
   
   async updateOne(_id, data) {
      const result = this.model.updateOne({ _id }, data);
      return result;
   }
   
   async findAll(props) {
      try {
         return this.model.find({}).populate(props?.field, props?.keys);
      } catch (error) {
         console.log(error)
      }
   }
   
   async findOne(_id) {
      const result = this.model.findOne({ _id });
      return result;
   }
}

module.exports = (model) => new Repository(model);
