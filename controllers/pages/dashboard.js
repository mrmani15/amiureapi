const mysql = require('mysql')

const db = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
})

exports.dashboard = (req, res) => {
  db.query('SELECT * FROM blog', (error, response) => {
    if (error) {
      console.log(error)
    } else {
      return res.status(200).json({ response })
    }
  })
}