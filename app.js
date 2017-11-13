const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const queries = require('./db/queries');
const methodOverride = require('method-override');


app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(methodOverride("_method"))


app.get('/', (req, res) => {
  queries.getMovies()
    .then(movies => {
      console.log(movies);
        queries.getPeople()
          .then(people => {
            console.log(people);
              res.render('index', {
                movies: movies,
                people: people
            })
          })
    })
})
 






app.listen(port, () => {
  console.log(`listening at ${port}`)
})
