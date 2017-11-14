
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {
          id: 1,
          name: 'Orlando Bloom',
          role: 'Actor'
        },
        {
          id: 2,
          name: 'Christopher Nolan',
          role: 'Director'
        },
        {
          id: 3,
          name: 'Quentin Tarantino',
          role: 'Director'
        },
        {
          id: 4,
          name: 'Peter Jackson',
          role: 'Director'
        }
      ]);
    });
};
