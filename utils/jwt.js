const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../variables");

const createAccessToken = (user) => {
  console.log(user);
  const expToken = new Date();
  expToken.setHours(expToken.getHours() + 3);
  const payload = {
    token_type: "access",
    user_id: user._id,
    iat: Date.now(),
    exp: expToken.getTime(),
  };

  console.log('accessToken del jwt: ',payload.user_id);
  return jwt.sign(payload, JWT_SECRET_KEY);
};

const createRefreshToken = (user) => {
  const expToken = new Date();
  expToken.setMonth(expToken.getMonth() + 1);
  const payload = {
    token_type: "refresh",
    user_id: user._id,
    iat: Date.now(),
    exp: expToken.getTime(),
  };
  console.log(payload);
  return jwt.sign(payload, JWT_SECRET_KEY);
};

const decoded = (token) => {
  return jwt.verify(token, JWT_SECRET_KEY);
};


const verify = (token) => {
  try {
    console.log("Verifying token...");
    const payload = jwt.verify(token, JWT_SECRET_KEY);
    console.log(payload.user_id);
    return payload;
  } catch (error) {
    console.error("Token verification error:", error);
    throw error;
  }
};

module.exports = {
  createAccessToken,
  createRefreshToken,
  decoded,
  verify
};