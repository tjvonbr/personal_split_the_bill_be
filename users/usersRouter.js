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
  let { firstName, lastName, email, username, password } = req.body
  let user = req.body
  const hash = bcrypt.hashSync(user.password, 10)
  user.password = hash
  if( !firstName || !lastName || !email || !username || !password ){
    res.status(400).json({ message: 'invalid credentials obj' })
  } else {
  db.insert(user)
    .then(newUser => {
      console.log(user)
      res.status(200).json(newUser)
    })
    .catch(err => {
      console.log(err)
      res.status(500).jason({ error: 'oops something happened' })
    })
  }
});

router.post('/login', (req, res) => {
  let { username, password } = req.body
  if( !username || !password ){
    res.status(400).json({ message: 'Invalid data object'})
  }
  else {
  db.getBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // const user = req.user.id
        // console.log(user)
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
  }
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
<<<<<<< HEAD
  db.getById(id)
  .then(user => {
    if(user.length === 0){
      res.status(404).json({ message: 'No user here'})
      } else {
        res.status(200).json(user)
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'oops something happened'})
=======
  db.getByIdWithMeals(id)
    .then(users => {
      res.status(200).json(users)
>>>>>>> 2afe46b3434dc443b1383c6519d15194b185b69b
    })
})

//**** MEALS MODEL ABSTRACT THIS IF TIME*/
router.get('/:id/meals', (req, res) => {
  const { id } = req.params
<<<<<<< HEAD
  db.getMeal(id)
    .then(meals => {
      if(meals.length === 0){
        res.status(404).json({ message: 'No user here'})
        } else {
          res.status(200).json(meals)
        }
      })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'oops something happened'})
    })
=======
  db.getMealsByUserId(id)
    .then(meals => {res.status(200).json(meals)})
>>>>>>> 2afe46b3434dc443b1383c6519d15194b185b69b
})

router.get('/:id/meals/:ids', (req, res) => {
  const { id } = req.params
  const { ids } = req.params
  db.getUserMealById(id, ids)
    .then(meals => {res.status(200).json(meals)})
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'oops something happened'})
    })
})

router.post('/:id/meals/',  (req, res) => {
  const { id } = req.params
<<<<<<< HEAD
  const { restaurant, meal, total, comments } = req.body
  const post = req.body
  
    if(!restaurant || !meal || !total ){
        res.status(400).json({ message: 'owie incorect meal data'})
      } else {
      db.insertMeal(id, post) 
      .then(meals => {
      // console.log(meals)    
      res.status(200).json(meals)     
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ error: 'oops something happened'})
    })
    }  
})

router.put('/:id/meals', (req, res) => {
  const { id } = req.params
  const { restaurant,meal, total, comments } = req.body
  const body = req.body
  if(!restaurant || !meal || !total ){
    res.status(400).json({ message: 'Invalid obj data'})
  } else {
  db.updateMeal(id, body)
    .then( newMeal => {
      res.status(200).json(newMeal)
    })
  }
})

router.delete('/:id/meals/:ids',  (req, res) => {
  const { id } = req.params
  const { ids } = req.params
  db.removeMeal(id, ids)
    .then(meals => {
      // console.log(meals)
      if(meals === 0){
        res.status(404).json({ message: 'incorrect/ invalid id'})
      } else {
        res.status(200).json(meals)
      }
      })    
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'oops something happened'})
    })
})

module.exports = router
=======
  db.getMealById(id)
    .then(meals => {res.status(200).json(meals)})
      db.removeMeal(id)
        .then(meals => {
          res.status(200).json(meals)
        })
})

router.post('/:id/meals/', (req, res) => {
  const { id } = req.params;
  const newMeal = req.body;

  db.insertMealForUser(id)
    .then()
})
module.exports = router;
>>>>>>> 2afe46b3434dc443b1383c6519d15194b185b69b
