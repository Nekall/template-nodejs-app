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
        msg: "Ce nom d'utilisateur est déjà pris."
      },
      validate: {
        notNull: { msg: "Le nom d'utilisateur est une propriété requise."},
        notEmpty: { msg: "Le nom d'un utilisateur ne peut être vide."}
      }
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Le mot de passe est une propriété requise."},
        notEmpty: { msg: "Le mot de passe ne peut être vide."}
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
