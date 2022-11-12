const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const proPicController = require("../controllers/proPic");
const postsController = require("../controllers/posts");
const {
  ensureAuth,
  ensureGuest,
  ensureAuthModel,
  ensureAuthStylist,
} = require("../middleware/auth");

//Pro Pic Route
//router.get("/:id", ensureAuth, postsController.getPost);

router.post(
  "/createProPic",
  upload.single("file"),
  proPicController.createProPic
);

//router.put("/likePost/:id", proPicController.likePost);

//router.delete("/deletePost/:id", proPicController.deletePost);

module.exports = router;
