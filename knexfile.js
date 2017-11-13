// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'movies-actors'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
