const mysql = require('mysql')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const db = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
})


exports.register = (req, res) => {

  const { name, email, password } = req.body

  if ((name === '') || (email === '') || (password === '')) {
    return res.render('register', { message: 'Please fill form properly' })
  }

  db.query('SELECT email FROM user WHERE email = ?', [email], async (error, results) => {
    if (error) {
      console.log(error)
    }
    if (results.length > 0) {
      return res.render('register', { message: 'Email already exits' })
    }

    let hashedPassword = await bcrypt.hash(password, 8)

    db.query('INSERT INTO user SET ?', { name: name, email: email, password: hashedPassword }, (error, results) => {
      if (error) {
        console.log(error)
      } else {
        const id = results.insertId
        const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
          expiresIn: process.env.JWT_EXPIRES_TIME
        })
        res.status(200).json({ token: token, id: id, })
      }
    })
  })
}
