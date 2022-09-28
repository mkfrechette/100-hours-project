module.exports = {
  ensureAuth: function (req, res, next) {
    console.log(req.user)
    if (req.isAuthenticated()) {
      return next();
    } else {
      console.log("booooo")
      res.redirect("/");
    }
  },
  ensureAuthModel: function (req, res, next) {
    console.log(req.user)
    if (req.isAuthenticated()) {
      return next();
    } else {
      console.log("booooo model")
      res.redirect("/");
    }
  },
  ensureAuthStylist: function (req, res, next) {
    console.log(req.user)
    if (req.isAuthenticated()) {
      return next();
    } else {
      console.log("booooo stylist")
      res.redirect("/");
    }
  },
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/dashboard");
    }
  },
};
