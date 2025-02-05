const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { redirectUrl } = require("../middleware.js");
const {
  signup,
  processSignup,
  login,
  processLogin,
  logout,
} = require("../controllers/user.js");

router.route("/signup").get(signup).post(wrapAsync(processSignup));

router
  .route("/login")
  .get(login)
  .post(
    redirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    processLogin
  );

router.get("/logout", logout);

module.exports = router;
