module.exports = {
  driver: 'pg',
  user: 'postgres',
  password: 'firman25',
  database: 'enamdua',
  host: 'localhost',
  port: '5432',
  schema: 'public', // The schema you are working with
  migrationsTable: 'migrations', // Table to store migration history
}
