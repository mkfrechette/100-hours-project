const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const stylistController = require('../controllers/stylist');
const modelController = require('../controllers/model');
const { ensureAuth, ensureGuest, ensureAuthModel, ensureAuthStylist } = require("../middleware/auth");

//Main Route
router.get("/", homeController.getIndex);

//Profile Routes
router.get("/profile/model", ensureAuthModel, postsController.getProfile);
router.get("/profile/stylist", ensureAuthStylist, postsController.getProfile)

//Feed Routes
router.get("/feed", ensureAuth, postsController.getFeed);

//Login/Logout Routes
router.get("/login", authController.getLogin);
router.post('/login/model', authController.postLoginModel);
router.post('/login/stylist', authController.postLoginStylist);
router.get("/logout", authController.logout);

//Signup Routes
router.post("/signup/stylist", authController.postStylistSignup);
router.post("/signup/model", authController.postModelSignup);
router.get("/signup", authController.getSignup);

//Models Routes
router.get("/models", modelController.getModels)

//Stylist Routes
router.get("/stylists", stylistController.getStylists)

//Old Routes

//router.post("/login", authController.postLogin);
/*router.post("/signup", authController.postSignup);*/
//router.get("/profile", passport.authenticate, postsController.getProfile);


module.exports = router;
