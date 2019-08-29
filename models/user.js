var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    username: DataTypes.TEXT,
    password: DataTypes.TEXT,
    credits: DataTypes.INTEGER
  });
  return User;
};
