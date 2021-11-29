const { Sequelize, DataTypes } = require("sequelize")
const UserModel = require("../models/user")
const bcrypt = require("bcrypt")

const sequelize = new Sequelize('Template', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})

const User = UserModel(sequelize, DataTypes)

const initDb = () => {
  return sequelize.sync({force: true}).then(_ => { //force: true pour drop la BDD et la recréer à chaque démarrage

    bcrypt.hash('admin', 10)
    .then(hash => {
      User.create({
          username: 'admin',
          password: hash
        })
      })
    .then(user => console.log("Compte Admin créé. Username: admin; Password: admin."))

    console.log(`La base de donnée nommée ${sequelize.config.database}, a bien été initialisée !`)
  })
}

module.exports = {
  initDb, User
}
