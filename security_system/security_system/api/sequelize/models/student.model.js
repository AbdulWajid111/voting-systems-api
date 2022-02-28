const DataType = require("sequelize");

module.exports = (sequalize) => {
  sequalize.define("student", {
    studentId: {
      type: DataType.INTEGER,
      require: true,
    },
    studentFullName: {
      type: DataType.STRING,
      require: true,
    },
    email: {
      type: DataType.STRING,
      require: true,
    },
    parentId: {
      type: DataType.INTEGER,
      require: false,
      reference: {
        model: "parent",
        key: "parentId",
      },
    },
    phoneNo: {
      type: DataType.STRING,
      require: true,
    },
    created_At: {
      type: DataType.DATE,
    },
    updated_At: {
      type: DataType.DATE,
    },
  });
};
