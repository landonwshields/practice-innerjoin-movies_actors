
exports.up = function(knex, Promise) {
  return Promise.all([
     knex.schema.createTable('people_movies', function (table) {
       table.increments().primary
       table.integer('people_id').references('people.id')
       table.integer('movies_id').references('movies.id')
     })
   ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('people_movies')
  ])
};
