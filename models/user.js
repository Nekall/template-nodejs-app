'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "This username is already taken."
      },
      validate: {
        notNull: { msg: "Username is a required property."},
        notEmpty: { msg: "Name of a user cannot be empty."}
      }
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Password is a required property."},
        notEmpty: { msg: "Password cannot be empty."}
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
