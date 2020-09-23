const mysql = require('mysql')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const db = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
})

exports.login = async (req, res) => {
  const { email, password } = req.body

  if ((email === '') || (password === '')) {
    return res.status(400).json({ error: 'Please fill form properly' })
  }

  try {
    db.query('SELECT * FROM user WHERE email = ?', [email], async (error, results) => {
      if (!results || !(await bcrypt.compare(password, results[0].password))) {
        return res.status(401).json({ message: 'Email or Password is incorrect' })
      } else {
        const id = results[0].id
        const name = results[0].name
        const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
          expiresIn: process.env.JWT_EXPIRES_TIME
        })
        res.status(200).json({ token: token, id: id, name: name })
      }
    })

  } catch (error) {
    console.log(error)
  }
}
