const express = require('express')
const router = express.Router()

const authRegister = require('../controllers/authentication/register')
const authLogin = require('../controllers/authentication/login')

const blogUpload = require('../controllers/pages/upload')
const getBlog = require('../controllers/pages/dashboard')

const auth = require('../middleware/auth')

router.post('/register', authRegister.register)

router.post('/login', authLogin.login)

router.get('/dashboard',auth, getBlog.dashboard)

router.post('/upload', auth, blogUpload.upload)

module.exports = router