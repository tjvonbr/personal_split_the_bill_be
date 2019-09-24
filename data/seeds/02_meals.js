
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('meals')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('meals').insert([
        {
          restaurant: 'slyce',
          meal: 'two pizzas and wings',
          total: 42,
          comments: 'meal includes drinks'
        },
        {
          restaurant: 'au cheval',
          meal: 'burgers',
          total: 21
        },
      ]);
    });
};
