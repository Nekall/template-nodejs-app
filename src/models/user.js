module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Le mot de passe est une propriété requise."},
        notEmpty: { msg: "Le mot de passe ne peut être vide."}
      }
    }
  })
}
