const cloudinary = require("../middleware/cloudinary");
const Stylist = require("../models/StylistSchema");
const Model = require("../models/ModelSchema");

module.exports = {
  getStylists: async (req, res) => {
    try {
      const stylists = await Stylist.find().sort({ createdAt: "desc" }).lean();
      const models = await Model.find().sort({ createdAt: "desc" }).lean();
      res.render("stylists.ejs", { stylists: stylists, models: models });
    } catch (err) {
      console.log(err);
    }
  },
};
