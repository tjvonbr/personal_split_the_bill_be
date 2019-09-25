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
    getMealsByUserId,
    getByIdWithMeals,
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

function getMeal(id) {
    return db('users')
        .join('user_meals', 'users.id', 'user_meals.user_id')
        // .select('user_meals.meal_id')
        // .where('users.id', id)
        .join('meals', 'meals.id', "user_meals.meal_id")   
        .select('meals.*')
        .where('users.id', id)
}

function getMealById(id) {
    return db('users')
        .join('user_meals', 'users.id', 'user_meals.user_id')
        .select('user_meals.meal_id')
        // .where('users.id', id)
        .join('meals', 'meals.id', "user_meals.meal_id")   
        .select('meals.*')
        .where('user_meals.meal_id', id)
}

// Alternative helper function for getMealById(id)
function getMealsByUserId(id) {
  return db('user_meals AS um')
    .select(['um.user_id', 'um.meal_id', 'm.id', 'm.restaurant', 'm.meal', 'm.total', 'm.comments'])
    .join('meals AS m', 'um.meal_id', 'm.id')
    .where({ user_id: id })
};

// Alternative helper function for getById(id)
function getByIdWithMeals(id) {
  const userQuery = get().where({ id }).first();
  const mealsQuery = getMealsByUserId(id);
  
  return Promise.all([userQuery, mealsQuery])
    .then(([user, meals]) => {
      user.meals = meals;
      return user;
    });
};


