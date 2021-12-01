const { User } = require("../db/sequelize")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const privateKey = require("../auth/private_key")
const { Sequelize, DataTypes } = require("sequelize")

module.exports = (app) => {
  app.post("/register", (req, res) => {
    if(req.body.password != req.body.passwordConfirm){
      const message = `Les mots de passes ne sont pas identiques.`;
      return res.status(400).json({ message })
    }

    bcrypt.hash(req.body.password, 10)
    .then(hash => {
      User.create({
          username: req.body.username,
          password: hash
        })
      })
    .then(_ => {
      const message = `L'utilisateur ${req.body.username} a bien été créé.`;
      res.status(201).json({ message, username: req.body.username})
    })
    .catch(error => {
      const message = `L'utilisateur n'a PAS été créé. Veuillez réessayer.`;
      return res.json({ message, data: error })
    })
  })
}
