const DataType = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("teacher", {
    teahcherId: {
      type: DataType.INTEGER,
      require: true,
    },
    teacherFullName: {
      type: DataType.STRING,
      require: true,
    },
    email: {
      type: DataType.STRING,
      require: true,
    },
    password: {
      type: DataType.STRING,
      require: true,
    },
    phoneNo: {
      type: DataType.STRING,
      require: true,
    },
    createdAt: {
      type: DataType.DATE,
    },
    updatedAt: {
      type: DataType.DATE,
    },
  });
};
