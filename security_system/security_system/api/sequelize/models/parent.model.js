const DataType = require("sequelize");
// const dbConfig = require("../../../config").dbconfig;

module.exports = (sequelize) => {
  sequelize.define(
    "parent",
    {
      parentId: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      parentFullName: {
        type: DataType.STRING,
        allowNull: false,
      },
      email: {
        type: DataType.STRING,
      },
      password: {
        type: DataType.STRING,
        allowNull: false,
      },
      phoneNo: {
        type: DataType.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataType.DATE,
      },
      updatedAt: {
        type: DataType.DATE,
      },
    },
    {
      tableName: "parent",
      timestamps: false,
      // indexes: [
      // 	{
      // 		name: 'answer_pkey',
      // 		unique: true,
      // 		fields: [
      // 			{ name: 'answerId' },
      // 		],
      // 	},
      // 	{
      // 		name: 'answer_question_fkey',
      // 		fields: [
      // 			{ name: 'questionId' },
      // 		],
      // 	},
      // 	{
      // 		name: 'answer_user_fkey',
      // 		fields: [
      // 			{ name: 'userId' },
      // 		],
      // 	},
      // ],
    }
  );
};
