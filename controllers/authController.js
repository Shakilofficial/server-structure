const jwt = require("jsonwebtoken");

const secret = process.env.ACCESS_TOKEN_SECRET;

const createAccessToken = async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, secret, { expiresIn: "1h" });
  res
    .cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "none",
    })
    .send({ success: true });
};

module.exports = { createAccessToken };
