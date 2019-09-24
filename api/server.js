const express = require('express')

console.log('environment', process.env.NODE_ENV);

const userRouter = require('../users/usersRouter')
const mealsRouter = require('../meals/mealsRouter')

const server = express()
server.use(express.json())

server.use('/api/user', userRouter)
server.use('/api/meal', mealsRouter)

server.get('/', (req, res) => {
    res.json({ sanity: 'check'})
})

module.exports = server