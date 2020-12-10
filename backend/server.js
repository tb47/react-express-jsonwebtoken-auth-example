const express = require("express");
const server = express();
const jwt = require("jsonwebtoken");

const cors = require("cors");
server.use(cors({ origin: true }));

const security = require("./middleware/authorization");

server.post("/login", (req, res) => {
  const signedUser = { testuser: "testpassword" };
  const accessToken = jwt.sign(signedUser, "access_token_secret");
  res.json({ testToken: accessToken });
});

server.get("/unprotected", (req, res) => {
  res.json("this is an unprotecteed route");
});

server.get("/protected", security.checkAuthToken, (req, res) => {
  res.json("this is an protected route");
});

server.listen(5000, () => {
  console.log("The server is online @ port 5000");
});
