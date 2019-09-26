const express = require('express')
const cors = require('cors');

console.log('environment', process.env.NODE_ENV || 'development');

const userRouter = require('../users/usersRouter')
const mealsRouter = require('../meals/mealsRouter')

const server = express();
server.use(cors({
    origin: 'https://splitthebillbw.netlify.com'
}));

server.use(express.json());

server.use('/api/user', userRouter)
server.use('/api/meal', mealsRouter)

server.get('/', (req, res) => {
    res.json({ sanity: 'check'})
})

module.exports = server;