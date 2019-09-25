
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
        }
      ]);
    });
};
