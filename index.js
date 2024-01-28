const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const pool = require('./config/dbConfig')
const corsOptions = require('./config/corsOptions')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 9000

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', require('./routes/business'))

app.set('pgPool', pool)
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
