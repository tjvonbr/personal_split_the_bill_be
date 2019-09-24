const jwt = require('jsonwebtoken')

const secret = require('../config/secrets')

module.exports = (req, res, next) => {
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, secret.jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: 'You are not authorized!!' })
      } else {
        next()
      }
    })
  } else {
      res.status(400).json({ message: 'No credentials provided!'})
  }
}