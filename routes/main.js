const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest, ensureAuthModel, ensureAuthStylist } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/profile/model", ensureAuthModel, postsController.getProfile);
router.get("/profile/stylist", ensureAuthStylist, postsController.getProfile)
//router.get("/profile", passport.authenticate, postsController.getProfile);
router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/login", authController.getLogin);
//router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
/*router.post("/signup", authController.postSignup);*/


router.post("/signup/stylist", authController.postStylistSignup);


router.post("/signup/model", authController.postModelSignup);

router.post('/login/model', authController.postLoginModel);
router.post('/login/stylist', authController.postLoginStylist);
//Models Routes


//Stylist Routes

//Auth Routes


module.exports = router;
