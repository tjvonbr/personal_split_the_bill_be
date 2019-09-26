
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
<<<<<<< HEAD
        }
=======
        }   
>>>>>>> 4f82abc22e42a630d58e34db7d994dfa3c09246d
      ]);
    });
};
