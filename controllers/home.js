const Model = require("../models/ModelSchema");
const Stylist = require("../models/StylistSchema");

module.exports = {
  getIndex: async (req, res) => {
    try {
      const model = await Model.find().sort({ createdAt: "desc" }).lean();
      const stylist = await Stylist.find().sort({ createdAt: "desc" }).lean();
      res.render("index.ejs", { model: model, stylist: stylist });
    } catch (err) {
      console.log(err);
    }
  },
};

/*passport.use("model",
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      Model.findOne({ email: email.toLowerCase() }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { msg: `Email ${email} not found.` });
        }
        if (!user.password) {
          return done(null, false, {
            msg:
              "Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.",
          });
        }
        user.comparePassword(password, (err, isMatch) => {
          if (err) {
            return done(err);
          }
          if (isMatch) {
            return done(null, user);
          }
          return done(null, false, { msg: "Invalid email or password." });
        });
      });
    })
  );

  passport.use("stylist",
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      Stylist.findOne({ email: email.toLowerCase() }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { msg: `Email ${email} not found.` });
        }
        if (!user.password) {
          return done(null, false, {
            msg:
              "Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.",
          });
        }
        user.comparePassword(password, (err, isMatch) => {
          if (err) {
            return done(err);
          }
          if (isMatch) {
            return done(null, user);
          }
          return done(null, false, { msg: "Invalid email or password." });
        });
      });
    })
  );*/
