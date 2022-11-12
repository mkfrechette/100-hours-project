const cloudinary = require("../middleware/cloudinary");
const ProPic = require("../models/ProPic");
const StylistSchema = require("../models/StylistSchema");
const ModelSchema = require("../models/ModelSchema");

module.exports = {
  /*getProPic: async (req, res) => {
    try {
      const proPic = await ProPic.findById(req.params.id);
      res.render("proPic.ejs", { proPic: proPic, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },*/
  createProPic: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await ProPic.create({
        image: result.secure_url,
        cloudinaryId: result.public_id,
        user: req.user.id,
      });
      console.log("Profile Picture has been added!");
      const user = req.user.userName;
      const model = await ModelSchema.findOne({ userName: user }).lean();
      const stylist = await StylistSchema.findOne({ userName: user }).lean();
      if (model) {
        return res.redirect("/profile/model");
      } else if (stylist) {
        return res.redirect("/profile/stylist");
      }
      //res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  deleteProPic: async (req, res) => {
    try {
      // Find pro pic by id
      let proPic = await ProPic.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(proPic.cloudinaryId);
      // Delete pro pic from db
      await ProPic.remove({ _id: req.params.id });
      console.log("Deleted Profile Picture");
      const user = req.user.userName;
      const model = await ModelSchema.findOne({ userName: user }).lean();
      const stylist = await StylistSchema.findOne({ userName: user }).lean();
      if (model) {
        return res.redirect("/profile/model");
      } else if (stylist) {
        return res.redirect("/profile/stylist");
      }
      //res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};
