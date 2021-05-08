const router = require("express").Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const models = require("../models");
const { login, logout, check } = require("../controllers/auth");

passport.use(
  new LocalStrategy(async function (username, password, done) {
    // getting the user
    const user = await models.User.findOne({
      where: {
        username,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      raw: true,
    });

    if (user) {
      const match = await bcrypt.compare(password, user.password);

      if (match) return done(null, user);

      return done(null, false, { message: "wrong password" });
    }
    return done(null, false, { message: "user not found" });
  })
);

router.use(passport.initialize());

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  login
);
router.post("/logout", logout);
router.post("/check", check);

module.exports = router;
