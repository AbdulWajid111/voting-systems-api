const { QueryTypes } = require("sequelize");
const sequalize = require("../sequelize");
const bcrypt = require("bcrypt");
const { JwtHandler } = require("../middleware/jwtToken");

exports.login = async (req, res, next) => {
  console.log("req.body", req.body);
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const singleUser = await sequalize.query(
      `
      SELECT * from parent where email = '${email}'
    `,
      {
        type: QueryTypes.SELECT,
      }
    );
    if (singleUser) {
      console.log(singleUser[0].password);
      const match = await bcrypt.compare(password, singleUser[0]?.password);
      if (match) {
        JwtHandler(singleUser[0], res, next);
      } else {
        console.log("match", match);
        res.status(401).send("record not found");
      }
    }
  } catch (error) {
    console.log("error", error);
  }
};
