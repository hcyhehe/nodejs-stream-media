const express = require('express')
const router = express.Router()
const upload = require('../commons/upload')
const check = require('../middlewares/check')
const admin = require('../controllers/bg/admin')


router.post('/upload', upload.upload)

router.post('/login', check.verifyClient, admin.login)



module.exports = router
