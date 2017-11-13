
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          id: 1,
          title: 'Lord of the Rings',
          director_id: 4
        },
        {
          id: 2,
          title: 'The Dark Knight',
          director_id: 2
        },
        {
          id: 3,
          title: 'Pulp Fiction',
          director_id: 3
        }
      ]);
    });
};
 
