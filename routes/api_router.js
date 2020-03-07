const express = require('express')
const router = express.Router()
const check = require('../middlewares/check')
const front = require('../controllers/api/front')


router.get('/test', front.test)


module.exports = router
