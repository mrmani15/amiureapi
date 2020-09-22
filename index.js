const express = require('express')
const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const db = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
})

db.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('mysql connected')
  }
})

app.use('/', require('./routes/auth'))

app.listen(5000, () => console.log('server started'))