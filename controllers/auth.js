const jwt = require("jsonwebtoken");

module.exports = {
  login: (req, res) => {
    const user = req.user;
    const userObj = {
      id: user.id,
      username: user.username,
    };

    const accessToken = jwt.sign(userObj, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: 60 * 10,
    });

    const refreshToken = jwt.sign(userObj, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("refresh", refreshToken, {
      httpOnly: true,
      expires: false,
      maxAge: 604800000,
    });

    return res.send({ accessToken, user });
  },

  /*







  */
  logout: (req, res) => {
    res.clearCookie("refresh").send("Logout Successful!");
  },

  /*







  */
  check: (req, res) => {
    const refreshToken = req.cookies.refresh;

    if (!refreshToken) return res.status(401).send("Not authenticated");

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(400).send(err);

      delete user.iat;
      delete user.exp;

      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: 10 * 60,
      });

      const newRefreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "7d",
      });

      res.cookie("refresh", newRefreshToken, {
        httpOnly: true,
        expire: false,
        maxAge: 604800000,
      });

      return res.send({ user, accessToken });
    });
  },
};
