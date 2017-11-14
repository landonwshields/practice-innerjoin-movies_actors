const db = require('./connections')



function getMovies() {
  return db.select('title', 'name').from('movies').innerJoin('people', 'people.id', 'movies.director_id')
}

// function getPeople() {
//   return db('people').select('*')
// }

function getPeople() {
  return db.select('name', 'role', 'title').from('people').innerJoin('people_movies', 'people_id', 'people.id').innerJoin('movies', 'movies.id', 'movies_id')
}








module.exports = {
  getMovies,
  getPeople
}
