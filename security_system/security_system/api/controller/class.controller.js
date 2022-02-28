const { StatusCodes } = require("http-status-codes");
const { QueryTypes } = require("sequelize");
const sequalize = require("../sequelize");

exports.getAll = async (req, res, next) => {
  try {
    const users = await sequalize.query(
      `
       SELECT * from class 
    `,
      { type: QueryTypes.SELECT }
    );
    res.status(StatusCodes.OK).send(users);
  } catch (error) {
    console.log("error", error);
  }
};

exports.getSingle = async (req, res, next) => {
  try {
    const singleRecord = await sequalize.query(
      `
            SELECT * FROM class WHERE classId = ${req.params.classId}
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

exports.addNew = async (req, res, next) => {
  const { className } = req.body;
  console.log("add", req.body);
  try {
    const users = await sequalize.query(
      `
      INSERT INTO school_system.class
      (className,created_At,updated_At)
      VALUES ('${className}',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)
    `,
      { type: QueryTypes.INSERT }
    );
    res.status(StatusCodes.OK).send(users);
  } catch (error) {
    console.log("error", error);
  }
};

exports.updateClass = async (req, res, next) => {
  const { className } = req.body;
  try {
    const parents = sequalize.query(
      `
		Update school_system.class
		SET className = '${className}'
		WHERE classId = ${req.params.classId}
		`,
      {
        type: QueryTypes.UPDATE,
      }
    );
    return res.status(StatusCodes.OK).send(parents);
  } catch (err) {
    // console.error(`blockUser Updating Error! ${err}`);
    // if (err.ValidationError || err.SyntaxError) {
    //   req.body = {
    //     errorKey: ErrorKey.BAD_REQUEST,
    //   };
    //   return next();
    // }
    // req.body = {
    //   errorKey: ErrorKey.PARTIAL_CONTENT,
    // };
  }
  return null;
};

exports.deleteClass = async (req, res, next) => {
  try {
    const parents = await sequalize.query(
      `
		delete from school_system.class
		WHERE classId = ${req.query.classId}
		`,
      {
        type: QueryTypes.DELETE,
      }
    );
    // if (deletedRow === 1) {
    // console.info("blockUser Deleted");
    // response.setData('Successfully deleted');
    // response.setStatus(ReasonPhrases.OK);
    return res.status(StatusCodes.OK).send("Successfully deleted");
    //}
    // req.body = {
    // 	errorKey: ErrorKey.BAD_REQUEST,
    // };
    // return next();
  } catch (err) {}
};
