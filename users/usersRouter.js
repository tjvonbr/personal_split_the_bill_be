const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const db = require('../users/usersModel')
const secret = require('../config/secrets')

const auth = require('../auth/authentication')

function generateToken (user) {
  const payload = {
    username: user.username,
  }
  const options = {
    expiresIn: '8h'
  }
  return jwt.sign(payload, secret.jwtSecret, options)
}

router.post('/register', (req, res) => {
  let user = req.body
  const hash = bcrypt.hashSync(user.password, 10)
  user.password = hash

  db.insert(user)
    .then(newUser => {
      res.status(200).json(newUser)
    })
    .catch(err => {
      console.log(err)
      res.status(500).jason({ error: 'oops something happened'})
    })
});

router.post('/login', (req, res) => {
  let { username, password } = req.body

  db.getBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user)
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token: token
        })
      } else {
        res.status(401).json({ message: 'invalid credentials'})
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'oops something happened'})
    })
})

router.get('/', (req, res) => {
  db.get()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => res.send(err))
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  db.getById(id)
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'oops something happened'})
    })
})

//**** MEALS MODEL ABSTRACT THIS */
router.get('/:id/meals', (req, res) => {
  const { id } = req.params
  db.getMeal(id)
    .then(meals => {res.status(200).json(meals)})
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'oops something happened'})
    })
})

router.get('/:id/meals/:ids', (req, res) => {
  const { id } = req.params
  const { ids } = req.params
  db.getMealById(id, ids)
    .then(meals => {res.status(200).json(meals)})
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'oops something happened'})
    })
})

router.post('/:id/meals/',  (req, res) => {
  const { id } = req.params
  const { restaurant, meal, total, comments } = req.body
  const post = req.body
  db.getMealBy(id, post)
    .then(meals => {
      // console.log(meals)
      if(!restaurant || !meal || !total ){
        res.status(400).json({ message: 'owie incorect meal data'}) 
      } else {
        res.status(200).json(meals)
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'oops something happened'})
    })
})

router.delete('/:id/meals/:ids',  (req, res) => {
  const { id } = req.params
  const { ids } = req.params
  db.removeMeal(id, ids)
    .then(meals => {res.status(200).json(meals)})
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'oops something happened'})
    })
})

module.exports = router
