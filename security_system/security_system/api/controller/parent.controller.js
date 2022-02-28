const { StatusCodes } = require("http-status-codes");
const ErrorKey = require("../constants/errorKeys");
const { QueryTypes } = require("sequelize");
const sequelize = require("../sequelize");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.getAllParent = async (req, res, next) => {
  try {
    const parents = await sequelize.query(
      `
		select * from parent
		`,
      {
        type: QueryTypes.SELECT,
      }
    );
    return res.status(StatusCodes.OK).send(parents);
  } catch (err) {
    if (
      err.ValidationError ||
      err.SyntaxError ||
      err.ForeignKeyConstraintError
    ) {
      req.body = {
        errorKey: ErrorKey.BAD_REQUEST,
      };
      return next();
    }
    req.body = {
      errorKey: ErrorKey.PARTIAL_CONTENT,
    };
  }
};

exports.getSingleParent = async (req, res, next) => {
  console.log("teacher", req.params);
  try {
    const singleRecord = await sequelize.query(
      `
            SELECT * FROM parent WHERE parentId = ${req.params.parentId}
          `,
      {
        type: QueryTypes.SELECT,
      }
    );
    return res.status(StatusCodes.OK).send(singleRecord);
  } catch (err) {
    console.log("error", err);
  }
};

exports.postParent = async (req, res, next) => {
  const { parentFullName, password, email, phoneNo } = req.body;
  try {
    const verifyEmail = await sequelize.query(
      `SELECT parentFullName , email , phoneNo FROM parent WHERE email = '${email}'`,
      { type: QueryTypes.SELECT }
    );
    if (verifyEmail.length > 0) {
      res.status(403).send("Email already exits");
    } else {
      await bcrypt.hash(password, saltRounds, function (err, password) {
        const parents = sequelize.query(
          `
    	INSERT INTO school_system.parent
    	(parentFullName, email, password, phoneNo, createdAt, updatedAt)
    	VALUES('${parentFullName}', '${email}', '${password}', '${phoneNo}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    	`,
          {
            type: QueryTypes.INSERT,
          }
        );
        // response.setData(blockUser);
        // response.setStatus(ReasonPhrases.CREATED);
        return res.status(StatusCodes.CREATED).send(parents);
      });
    }
  } catch (err) {
    console.log(
      "🚀 ~ file: parent.controller.js ~ line 65 ~ exports.postParent= ~ err",
      err
    );
    // console.error(`New blockUser Creating Error! ${err}`);
    // if (err.ValidationError || err.SyntaxError || err.ForeignKeyConstraintError) {
    // 	req.body = {
    // 		errorKey: ErrorKey.BAD_REQUEST,
    // 	};
    // 	return next();
    // }
    // req.body = {
    // 	errorKey: ErrorKey.PARTIAL_CONTENT,
    // };
    // return next();
  }
};

exports.parentUpdate = async (req, res, next) => {
  // const response = new ResponseModel();
  const { parentFullName, email, password, phoneNo } = req.body;

  try {
    await bcrypt.hash(password, saltRounds, function (err, password) {
      const parents = sequelize.query(
        `
		Update school_system.parent
		SET parentFullName = '${parentFullName}', email = '${email}', password = '${password}', phoneNo =  ${phoneNo}
		WHERE parentId = ${req.params.parentId}
		`,
        {
          type: QueryTypes.UPDATE,
        }
      );

      console.info("blockUser Updated");
      // response.setData(blockUser);
      // response.setStatus(ReasonPhrases.OK);
      return res.status(StatusCodes.OK).send(parents);
    });
  } catch (err) {
    console.error(`blockUser Updating Error! ${err}`);
    if (err.ValidationError || err.SyntaxError) {
      req.body = {
        errorKey: ErrorKey.BAD_REQUEST,
      };
      return next();
    }
    req.body = {
      errorKey: ErrorKey.PARTIAL_CONTENT,
    };
  }
  return null;
};

exports.parentDelete = async (req, res, next) => {
  try {
    const parents = await sequelize.query(
      `
		delete from school_system.parent
		WHERE parentId = ${req.query.parentId}
		`,
      {
        type: QueryTypes.DELETE,
      }
    );
    return res.status(StatusCodes.OK).send("Successfully deleted");
  } catch (err) {
    return next();
  }
};
