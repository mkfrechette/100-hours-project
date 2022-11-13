const cloudinary = require("../middleware/cloudinary");
const Model = require("../models/ModelSchema");
const ProPic = require("../models/ProPic");

module.exports = {
  getModels: async (req, res) => {
    try {
      const models = await Model.find().sort({ createdAt: "desc" }).lean();
      const modelId = models.map((e) => e._id);
      const proPic = await ProPic.find({ user: { $in: modelId } }).lean();
      console.log(proPic)
      const usersWithProPics = proPic.map(e => e.user)
      const proPicUsername = await Model.find({  _id: { $in: usersWithProPics} }).lean()
      console.log(proPicUsername)
      const modelProfile = proPicUsername.reduce((a, c) => ({ ...a, [c.userName]: c }), {});
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
