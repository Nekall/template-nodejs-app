const jwt = require('jsonwebtoken')
require("dotenv").config();
const privateKey = process.env.PRIVATE_KEY;

module.exports = (req, res, next) => {
  const authorizationHeader = req.headers.authorization
  if(!authorizationHeader){
    const message = "You did not provide an authentication token. Add one in the request header."
    return res.status(401).json({ message })
  }

    const token = authorizationHeader.split(' ')[1]
    const decodedToken = jwt.verify(token, privateKey, (error, decodedToken) => {
    if(error){
      const message = "User is not allowed to access this resource."
      return res.status(401).json({ message, data: error })
    }

    const userId = decodedToken.userId
    if(req.body.userId && req.body.userId !== userId){
      const message = "User ID is invalid."
      res.status(401).json({ message })
    }else{
      next()
    }
  })
}
