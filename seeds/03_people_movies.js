
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people_movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('people_movies').insert([
        {
          id: 1,
          people_id: 1,
          movies_id: 1
        },
        {
          id: 2,
          people_id: 2,
          movies_id: 2
        },
        {
          id: 3,
          people_id: 3,
          movies_id: 3
        }
      ]);
    });
};
