
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {
          id: 1,
          name: 'Orlando Bloom',
          role: 'actor'
        },
        {
          id: 2,
          name: 'Christopher Nolan',
          role: 'director'
        },
        {
          id: 3,
          name: 'Quentin Tarantino',
          role: 'director'
        },
        {
          id: 4,
          name: 'Peter Jackson',
          role: 'director'
        }
      ]);
    });
};
