const db = require('./connections')



function getMovies() {
  return db.select('title', 'name').from('movies').innerJoin('people', 'people.id', 'movies.director_id')
}

function getPeople() {
  return db('people').select('*')
}







module.exports = {
  getMovies,
  getPeople
}
