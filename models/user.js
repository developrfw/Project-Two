module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    username: DataTypes.TEXT,
    password: DataTypes.TEXT,
    credits: DataTypes.STRING
  });
  return User;
};
