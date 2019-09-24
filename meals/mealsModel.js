const knex = require('knex')
const config = require('../knexfile.js')

const environment = process.env.DB_ENV || 'development'

const db = knex(config[environment])

module.exports = {
    get,
    getBy,
    getById,
    insert,
    update,
    remove
}

function get() {
    return db('meals')
}

function getBy(filter) {
    return db('meals')
        .where(filter)
  }

function getById(id) {
    return db('meals')
        .where({ id })
        .first()
}
function insert(user) {
    return db('meals')
        .insert(user, 'id')
        .then(ids => {
        const [id] = ids
        return getById(id)
        })
}

function update(id, changes) {
    return db('meals')
      .where({ id })
      .update(changes)
  }
  
  function remove(id) {
    return db('meals')
      .where('id', id)
      .del();
  }