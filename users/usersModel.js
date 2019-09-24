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
    remove,
    getMeal,
    getMealById,
    insertMeal,
    updateMeal,
    removeMeal
}

function get() {
    return db('users')
}

function getBy(filter) {
    return db('users').where(filter)
  }

function getById(id) {
    return db('users')
        .where({ id })
        .first()
}
function insert(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
        const [id] = ids
        return getById(id)
        })
}

function update(id, changes) {
    return db('users')
      .where({ id })
      .update(changes)
  }
  
function remove(id) {
    return db('users')
        .where('id', id)
        .del();
}

//meals

function getMeal(id) {
    return db('user_meals')
        // .select('*')
        .join('users', 'user_meals.user_id', 'users.id')
        // .select('user_meals.meal_id')
        .where('users.id', id)
        .join('meals', 'meals.id', "user_meals.meal_id")
        // .where('users.id', id)   
        .select('meals.*')
        // .where('users.id', "user_meals.user_id")       
}

function getMealById(id, ids) {
    return db('user_meals')
        .join('users', 'user_meals.user_id', 'users.id')
        .where('users.id', id)
        .join('meals', 'meals.id', "user_meals.meal_id")  
        .where('meals.id', ids)
        .select('meals.*')
}

function insertMeal(id, ids) {
    return db('user_meals')
        
}
//NW
function updateMeal(id, ids, changes) {
    return db('user_meals')
        
}

function removeMeal(id, ids) {
    return db('user_meals')
        // .join('users', 'user_meals.user_id', 'users.id')
        .join('meals', "user_meals.meal_id", 'meals.id')
        .where('user_meals.meal_id', ids)  
        .andWhere('user_meals.user_id', id)
        .first()
        // .select('meals.*')
        .del()
}


