const jwt = require("jsonwebtoken");

module.exports = {
  checkAuthToken: (checkAuthToken = (req, res, next) => {
    let bearerHeader;
    try {
      bearerHeader = req.headers["authorization"].split(" ")[1];
    } catch (err) {
      console.log(err);
      res.sendStatus(403);
    }
    if (!bearerHeader) {
      res.sendStatus(403);
    } else {
      jwt.verify(
        bearerHeader,
        'access_token_secret',
        (verify = (err) => {
          if (err) {
            res.sendStatus(403);
          } else {
            next();
          }
        })
      );
    }
  }),
};
