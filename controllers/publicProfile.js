const ProPic = require("../models/ProPic");
const Stylist = require("../models/StylistSchema");
const Model = require("../models/ModelSchema");
const Post = require("../models/Post");

module.exports = {
    getPublicProfile: async (req, res) => {
      try {
        const user = await Post.find({ user: req.user.id }).sort({ createdAt: "desc" }).lean(); // posts of logged in user
        const posts = await Post.find({ user: req.params.userId }).populate('user').sort({ createdAt: "desc" }).lean(); // posts by userId
        const getUserInfo = await Model.findById(req.params.userId) // finds user info from userId in params
        const username = getUserInfo.userName // gets username from user object
        res.render("profile.ejs", { posts, user: req.user, username: username })
      } catch (err) {
        console.log(err);
      }
    },
}