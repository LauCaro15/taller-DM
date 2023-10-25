const jwt = require("../utils/jwt");
const User = require("../models/user");
const { JWT_SECRET_KEY } = require("../utils/jwt");


const ensureAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(403).send({ msg: "La petición no tiene la cabecera de autenticación" });
  }
  const token = authorization.split(" ")[1];
  try {
    // Cambiar "decoded" a "verify" para validar el token
    const payload = jwt.verify(token, JWT_SECRET_KEY);  
    const { expiration_date, user_id } = payload;
    const currentTime = Date.now();

    if (expiration_date <= currentTime) {
      // El token ha expirado, renovar el token de acceso
      const userStorage = await User.findOne({ _id: user_id });
      const accessToken = jwt.createAccessToken(userStorage);
      req.user = { ...payload, expiration_date: accessToken.exp };
      res.setHeader("Authorization", `Bearer ${accessToken}`);
    } else {
      // El token aún es válido, establecer el usuario en req.user
      req.user = payload;
    }
    
    next();
  } catch (error) {
    return res.status(400).send({ msg: "Token inválido" });
  }
};

module.exports = {
  ensureAuth,
};

