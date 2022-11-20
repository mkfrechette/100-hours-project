const ProPic = require("../models/ProPic");
const Stylist = require("../models/StylistSchema");
const Model = require("../models/ModelSchema");
const Post = require("../models/Post");

module.exports = {
  getPublicProfile: async (req, res) => {
    try {
      const params = req.params.userId
      console.log(params)
      const model = await Model.findOne({ userName:  params }).lean(); 
      const stylist = await Stylist.findOne({ userName: params }).lean();
  
      if(!model) {
          const posts = await Post.find({ user: stylist._id }).lean();
          const profile = stylist;
          const proPic = await ProPic.findOne({ user: profile._id }).lean();
          console.log(proPic)
          res.render("pubProfile.ejs", { posts, profile, proPic });
      }  else {
          const posts = await Post.find({ user: model._id }).lean();
          const profile = model;  
          const proPic = await ProPic.findOne({ user: profile._id }).lean();
          console.log(proPic)
          res.render("pubProfile.ejs", { posts, profile, proPic });
      }
    } catch (err) {
      console.log(err);
    }
  },
}