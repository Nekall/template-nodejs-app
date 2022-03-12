const { User } = require("../db/sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ValidationError, UniqueConstraintError } = require("sequelize");
const privateKey = process.env.PRIVATE_KEY;

module.exports = (app) => {
  //CREATE
  app.post("/register", (req, res) => {
    if(req.body.password != req.body.passwordConfirm){
      const message = `Passwords are not the same.`;
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
      const message = `User ${req.body.username} has been created.`;
      res.status(201).json({ message, username: req.body.username})
    })
    .catch(error => {
      const message = `User has NOT been created. Please try again.`;
      return res.json({ message, data: error })
    })
  })

  //LOGIN
  app.post("/login", (req, res) => {

    User.findOne({ where: { username: req.body.username } }).then(user => {

      if(!user){
        const message = "This user does not exist."
        return res.status(404).json({ message })
      }

      bcrypt.compare(req.body.password, user.password).then(isPasswordValid => {
        if(!isPasswordValid){
          const message = `Wrong password.`;
          return res.status(401).json({ message })
        }

        const token = jwt.sign(
          { userId: user.id },
          privateKey,
          { expiresIn: "24h" }
        )

        const message = `User has been successfully logged in.`;
        return res.json({ message, data: user, token })
      })
    })
    .catch(error => {
      const message = `User has NOT been logged in. Please try again.`;
      return res.json({ message, data: error })
    })
  })

//Add your other users routes here
}
