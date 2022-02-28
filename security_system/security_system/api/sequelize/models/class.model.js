const DataType = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("class", {
    classId: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    className: {
      type: DataType.STRING,
      allowNull: false,
    },
    created_At: {
      type: DataType.DATE,
    },
    updated_At: {
      type: DataType.DATE,
    },
  });
};
