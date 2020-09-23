const express = require('express')
const mysql = require('mysql')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')
dotenv.config({ path: './.env' })

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

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

app.use(express.static('client/build'))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

app.listen(5000, () => console.log('server started'))
