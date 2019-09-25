const knex = require('knex')
const config = require('../knexfile.js')

const environment = process.env.DB_ENV || 'development'

const db = knex(config[environment])

const { getById } = require('../meals/mealsModel')

module.exports = {
    get,
    getBy,
    getByI,
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

function getByI(id) {
    return db('users')
        .where({ id })
        // .first()
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

// ******MEALS abstract this if time******

function getMeal(id) {
    return db('user_meals')
        // .select('*')
        // .join('users', 'user_meals.user_id', 'users.id')
        // .select('user_meals.meal_id')
        // .where('users.id', id)
        .join('meals', 'meals.id', "user_meals.meal_id")
        .where('user_meals.user_id', id) 
        .select('meals.*')
        // .where('users.id', "user_meals.user_id")       
}

function getMealById(id, ids) {
    return db('user_meals')
        // .join('users', 'user_meals.user_id', 'users.id')
        .join('meals', 'meals.id', "user_meals.meal_id")
        .where('user_meals.user_id', id)  
        .where('meals.id', ids)
        .first()
        .select('meals.*')
}
// ***********************************************************
//NW /* When a new meal is created the FK does not update */
function insertMeal(id, changes) {
    return db('meals')
    // .join('user_meals', 'meals.id', 'user_meals.meal_id')
    // .where('user_meals.meal_id', ids)
    // .andWhere('user_meals.user_id', id)
    .insert(changes)
    .then( ids => {
        // console.log(id)
        return getById(ids[0])
    })
    .then( meal => {
        // console.log(meal)
        const body = {user_id: id, meal_id: meal.id}
        return db('user_meals')
        .insert(body)
    })
    .then( id , (req, res)=> {
        res.status(200).json(meal)
    })
    .catch(err => {
        // console.log(err)
        res.send('jksdbfgjshdbf')
    })
}
//NW - havent started
function updateMeal(id, ids, changes) {
    return db('user_meals')
    .join('meals', "user_meals.meal_id", 'meals.id')
    .where('user_meals.meal_id', ids)  
    .andWhere('user_meals.user_id', id)
    .update(changes)
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


