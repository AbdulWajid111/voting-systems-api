const { StatusCodes } = require("http-status-codes");
const { QueryTypes } = require("sequelize");
const sequalize = require("../sequelize");
// const Cryptr = require("cryptr");
// const cryptr = new Cryptr("myTotalySecretKey");
// becrypt
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.getAllStudent = async (req, res, next) => {
  try {
    const getAllStudents = await sequalize.query(
      `
      SELECT student.studentId, student.studentFullName, student.email, student.phoneNo, parent.parentId, parent.parentFullName  from student LEFT JOIN parent ON student.parentId = parent.parentId
        `,
      {
        type: QueryTypes.SELECT,
      }
    );
    return res.status(StatusCodes.OK).send(getAllStudents);
  } catch (err) {
    console.log(err);
  }
};

exports.getSingleStudent = async (req, res, next) => {
  console.log("teacher", req.params);
  try {
    const singleRecord = await sequalize.query(
      `
            SELECT * FROM student WHERE studentId = ${req.params.studentId}
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

exports.addStudent = async (req, res, next) => {
  const { studentFullName, email, phoneNo, parentId } = req.body;
  try {
    // const verifyEmail = await sequalize.query(
    //   `SELECT studentFullName , email , phoneNo FROM student WHERE email = '${email}'`,
    //   { type: QueryTypes.SELECT }
    // );
    // if (verifyEmail.length > 0) {
    //   res.status(403).send("Email already exits");
    // } else {
    const payload = await sequalize.query(
      `
            INSERT INTO school_system.student
            (studentFullName, email, parentId, phoneNo, created_At, updated_At)
            VALUES('${studentFullName}', '${email}', ${parentId}, '${phoneNo}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
            `,
      {
        type: QueryTypes.INSERT,
      }
    );
    res.status(StatusCodes.CREATED).send(payload);
    // }
  } catch (err) {
    console.log("err", err);
  }
};

exports.studentDelete = async (req, res, next) => {
  try {
    const teacher = await sequalize.query(
      `
          delete from school_system.student
          WHERE studentId = ${req.query.studentId}
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

exports.studentUpdate = async (req, res, next) => {
  const { studentFullName, email, phoneNo } = req.body;
  try {
    await bcrypt.hash(password, saltRounds, function (err, password) {
      const teacher = sequalize.query(
        `
          Update school_system.student
          SET studentFullName = '${studentFullName}', email = '${email}', password = '${password}', phoneNo =  '${phoneNo}'
          WHERE studentId = ${req.params.studentId}
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
