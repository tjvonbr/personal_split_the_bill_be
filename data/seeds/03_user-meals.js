
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_meals')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('user_meals').insert([
        {
          user_id: 1,
          meal_id: 1,
          paid: false
        },
        {
          user_id: 1,
          meal_id: 2,
          paid: false
        },
        {
          user_id: 2,
          meal_id: 1,
          paid: false
<<<<<<< HEAD:data/seeds/user-meals.js
        },    
=======
        },
>>>>>>> 2afe46b3434dc443b1383c6519d15194b185b69b:data/seeds/03_user-meals.js
      ]);
    });
};
