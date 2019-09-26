

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          firstName: 'trevor',
          lastName: 'von bruenchenhein',
          email: 'tjvonbr@gmail.com',
          username: 'tjvonbr',
          password: 'test123'
        },
        {
          firstName: 'ryan',
          lastName: 'wisniewski',
          email: 'rwisni@gmail.com',
          username: 'rwisni',
          password: 'test123'
        },
      ]);
  });
};
