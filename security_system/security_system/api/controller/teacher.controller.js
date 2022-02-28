const { StatusCodes } = require("http-status-codes");
const { QueryTypes } = require("sequelize");
const sequalize = require("../sequelize");
// const Cryptr = require("cryptr");
// const cryptr = new Cryptr("myTotalySecretKey");
// becrypt
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.getAllTeachers = async (req, res, next) => {
  try {
    const allTeachers = await sequalize.query(
      `
            select * from teacher
        `,
      {
        type: QueryTypes.SELECT,
      }
    );
    return res.status(StatusCodes.OK).send(allTeachers);
  } catch (err) {
    console.log("error", err);
  }
};

exports.getSingleTeacher = async (req, res, next) => {
  console.log("teacher", req.params);
  try {
    const singleRecord = await sequalize.query(
      `
            SELECT * FROM teacher WHERE teahcherId = ${req.params.teacherId}
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

exports.addTeacher = async (req, res, next) => {
  const { teacherFullName, password, email, phoneNo } = req.body;
  try {
    const verifyEmail = await sequalize.query(
      `SELECT teacherFullName , email , phoneNo FROM teacher WHERE email = '${email}'`,
      { type: QueryTypes.SELECT }
    );
    if (verifyEmail.length > 0) {
      res.status(403).send("Email already exits");
    } else {
      await bcrypt.hash(password, saltRounds, function (err, password) {
        const payload = sequalize.query(
          `
          INSERT INTO school_system.teacher
          (teacherFullName, email, password, phoneNo, createdAt, updatedAt)
          VALUES('${teacherFullName}', '${email}', '${password}', '${phoneNo}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
          `,
          {
            type: QueryTypes.INSERT,
          }
        );
        return res.status(StatusCodes.CREATED).send(payload);
      });
    }
  } catch (err) {
    console.log("err", err);
  }
};

exports.parentUpdate = async (req, res, next) => {
  const { teacherFullName, email, phoneNo, password } = req.body;
  try {
    await bcrypt.hash(password, saltRounds, function (err, password) {
      const teacher = sequalize.query(
        `
          Update school_system.teacher
          SET teacherFullName = '${teacherFullName}', email = '${email}', password = '${password}', phoneNo =  ${phoneNo}
          WHERE teahcherId = ${req.params.teacherId}
          `,
        {
          type: QueryTypes.UPDATE,
        }
      );
      return res.status(StatusCodes.OK).send(teacher);
    });
  } catch (err) {
    console.error(`blockUser Updating Error! ${err}`);
  }
};

exports.deleteParentByParams = async (req, res, next) => {
  try {
    const teacher = await sequalize.query(
      `
          delete from school_system.teacher
          WHERE teahcherId = ${req.params.teacherId}
          `,
      {
        type: QueryTypes.DELETE,
      }
    );
    return res.status(StatusCodes.OK).send("Successfully deleted");
  } catch (err) {
    console.error(`blockUser Updating Error! ${err}`);
  }
};

exports.teacherDelete = async (req, res, next) => {
  try {
    console.log(req.query.teacherId);
    const teacher = await sequalize.query(
      `
          delete from school_system.teacher
          WHERE teahcherId = ${req.query.teacherId}
          `,
      {
        type: QueryTypes.DELETE,
      }
    );
    return res.status(StatusCodes.OK).send("Successfully deleted");
  } catch (err) {
    console.error(`blockUser Deleting Error! ${err}`);
  }
};
