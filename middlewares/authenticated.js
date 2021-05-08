const jsonwebtoken = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const jwt = req.headers["access-token"];

  try {
    const user = jsonwebtoken.verify(jwt, process.env.ACCESS_TOKEN_SECRET);
    res.locals.user = user;

    next();
    //
  } catch (error) {
    //
    return res.status(400).send(error);
  }
};
