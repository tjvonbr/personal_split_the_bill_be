
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl
        .increments()
      tbl
        .string('firstName', 50)
        .notNullable()
      tbl
        .string('lastName', 100)
        .notNullable()
      tbl
        .string('email', 100)
        .notNullable()
        .unique()
      tbl
        .string('username', 25)
        .notNullable()
        .unique()
      tbl
        .string('password', 250)
        .notNullable()
    })

    .createTable('meals', tbl => {
      tbl
        .increments()
      tbl
        .string('restaurant', 100)
        .notNullable()
      tbl
        .string('meal', 100)
        .notNullable()
      tbl
        .decimal('total', 2)
        .notNullable()
      tbl
        .string('comments', 250)
    })

    .createTable('user_meals', tbl => {
      tbl
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl
        .integer('meal_id')
        .unsigned()
        .references('id')
        .inTable('meals')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl
        .boolean('paid')
        .defaultTo(false)
      tbl
        .primary(['user_id', 'meal_id'])
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('user_meals')
    .dropTableIfExists('meals')
    .dropTableIfExists('users')
};
