const cloudinary = require("../middleware/cloudinary");
const Model = require("../models/ModelSchema");
const ProPic = require("../models/ProPic");

module.exports = {
  getModels: async (req, res) => {
    try {
      const models = await Model.find().sort({ createdAt: "desc" }).lean();
      const modelId = models.map((e) => String(e._id));
      const proPic = await ProPic.find({ user: { $in: modelId } });
      const modelProfile = proPic.reduce((a, c) => ({ ...a, [c._id]: c }), {});
      console.log(modelProfile);

      res.render("models.ejs", {
        models: models,
        proPic: proPic,
        modelId: modelId,
        modelProfile: modelProfile,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
