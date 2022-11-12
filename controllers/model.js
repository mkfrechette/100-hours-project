const cloudinary = require("../middleware/cloudinary");
const Model = require("../models/ModelSchema");
const ProPic = require("../models/ProPic");

module.exports = {
  getModels: async (req, res) => {
    try {
      const models = await Model.find().sort({ createdAt: "desc" }).lean();
      const proPic = await ProPic.find({ user: req.user.id });
      res.render("models.ejs", { models: models, proPic: proPic });
    } catch (err) {
      console.log(err);
    }
  },
};
