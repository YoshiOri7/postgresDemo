// =====================================================
// PostgreSQL and NodeJS
// http://mherman.org/blog/2015/02/12/postgresql-and-nodejs/#.WGmRTsc-OCo
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/demo';

var client = new pg.Client(connectionString);
client.connect();

// create table called ITEMS --------------
// var query = client.query(
//   'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
// query.on('end', function () {
//   client.end();
// });

// =====================================================
// https://github.com/brianc/node-postgres/wiki/FAQ

var queryText = 'INSERT INTO items(id, text) VALUES($1, $2) RETURNING id';

client.query(queryText, ['1', 'item 1'], function(err, result) {
  if(err) console.log(err);
  else {
    var newlyCreatedUserId = result.rows[0].id;
    console.log(newlyCreatedUserId)
  }
});