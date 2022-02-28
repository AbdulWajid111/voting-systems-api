var jwt = require("jsonwebtoken");

const JwtTokenVerification = (token, response, next) => {
  var decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (decoded) {
    return response.json({
      token,
    });
  } else {
    response.status(410).send("invalid user");
  }
};

const JwtHandler = (userRequest, response, next) => {
  jwt.sign(
    userRequest,
    process.env.JWT_SECRET,
    {
      expiresIn: "356d",
    },
    (err, token) => {
      // Error Create the Token
      if (err) {
        response.status(500);
        next(new Error("Unable to generate Token."));
      } else {
        // Token Created
        JwtTokenVerification(token, response, next);
      }
    }
  );
};

module.exports = {
  JwtHandler,
  JwtTokenVerification,
};
