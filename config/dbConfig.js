const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

pool.query('SELECT NOW()', (error, result) => {
  if (error) {
    console.error('Error connecting to PostgreSQL:', error)
  } else {
    console.log(
      'Connected to PostgreSQL. Current timestamp:',
      result.rows[0].now
    )
  }
})

process.on('exit', () => {
  pool.end()
})

module.exports = pool
