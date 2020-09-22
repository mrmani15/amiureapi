const mysql = require('mysql')

const db = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
})

exports.upload = (req, res) => {
  const { title, blog, name, id } = req.body

  if ((title === '') || (blog === '') || (id === '') || (name === '')) {
    return res.status(401).render('dashboard', {
      message: 'field is empty'
    })
  }

  const date = Date.now()

  db.query('INSERT INTO blog SET ?', { userId: id, blog: blog, username: name, title: title, date: date }, (error, results) => {
    if (error) {
      console.log(error)
    } else {
      return res.status(200).json({message: 'uploaded sucessfully'})
    }
  })
}