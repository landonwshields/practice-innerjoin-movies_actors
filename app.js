const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const queries = require('./db/queries');
const methodOverride = require('method-override');


app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(methodOverride("_method"))



app.get('/', function (req, res) {
   res.render('index')
})

app.get('/movies', (req, res) => {
  queries.getMovies()
    .then(movies => {
      console.log(movies);
        res.render('movies', {
          movies: movies,
        })
    })
})

app.get('/people', (req, res) => {
  queries.getPeople()
    .then(people => {
      console.log(people);
        res.render('people', {
          people: people
        })
    })
})







app.listen(port, () => {
  console.log(`listening at ${port}`)
})
