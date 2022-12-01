const cloudinary = require("../middleware/cloudinary");
const Stylist = require("../models/StylistSchema");
const ProPic = require("../models/ProPic");

/*module.exports = {
  getStylists: async (req, res) => {
    try {
      const stylists = await Stylist.find().sort({ createdAt: "desc" }).lean();
      const models = await Model.find().sort({ createdAt: "desc" }).lean();
      res.render("stylists.ejs", { stylists: stylists, models: models });
    } catch (err) {
      console.log(err);
    }
  },
};*/


module.exports = {
  getStylists: async (req, res) => {
    try {
      const stylists = await Stylist.find().sort({ createdAt: "desc" }).lean();
      const stylistId = stylists.map((e) => e._id);
      const proPic = await ProPic.find({ user: { $in: stylistId } }).lean();
      const usersWithProPics = proPic.map(e => e.user)
      const proPicUsername = await Stylist.find({  _id: { $in: usersWithProPics} }).lean()

      for(let i = 0; i < proPicUsername.length; i++) {
        proPicUsername[i].image = proPic[i].image
      }
   
      // console.log(proPicUsername)
      const stylistProfile = proPicUsername.reduce((a, c) => ({ ...a, [c.userName]: c }), {});
    
      console.log(stylistProfile);

      res.render("stylists.ejs", {
        stylists: stylists,
        proPic: proPic,
        stylistId: stylistId,
        stylistProfile: stylistProfile,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
