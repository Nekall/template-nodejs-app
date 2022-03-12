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
  return sequelize.sync({force: true}).then(_ => { //force: TRUE to drop the DB and recreate it at each startup

    bcrypt.hash('admin', 10)
    .then(hash => {
      User.create({
          username: 'admin',
          password: hash
        })
      })
    .then(_ => console.log("Admin account created. Username: admin; Password: admin."))

    console.log(`The database named ${sequelize.config.database}, has been initialized !`)
  })
}

module.exports = {
  initDb, User
}
