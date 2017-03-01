var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/demo';

pg.connect(connectionString, function (err, client, done) {
  if (err) {
    return console.error('error fetching client from pool', err)
  }
  client.query('SELECT $1::varchar AS my_first_query', ['node hero'], function (err, result) {
    done()

    if (err) {
      return console.error('error happened during query', err)
    }
    console.log(result.rows)
    // console.log(result.rows[0])
    process.exit(0)
  })
})