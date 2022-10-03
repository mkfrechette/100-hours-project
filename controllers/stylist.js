const Stylist = require("../models/StylistSchema");

module.exports = {
getStylists: async (req, res) => {
    try {
      const stylists = await Stylist.find().sort({ createdAt: "desc" }).lean();
      res.render("stylists.ejs", { stylists: stylists });
    } catch (err) {
      console.log(err);
    }
  },
}