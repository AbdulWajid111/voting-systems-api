const { FOREIGNKEYS } = require("sequelize/dist/lib/query-types");
const Config = require("../../config");

async function applySequelizeSetup(sequelize) {
  const { parent } = sequelize.models;
  if (Config.environment === "debug") {
    await sequelize.sync();
  }
  //
}

module.exports = { applySequelizeSetup };
