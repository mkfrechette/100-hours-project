const Model = require("../models/ModelSchema");

module.exports = {
getModels: async (req, res) => {
    try {
      const models = await Model.find().sort({ createdAt: "desc" }).lean();
      res.render("models.ejs", { models: models });
    } catch (err) {
      console.log(err);
    }
  },
}