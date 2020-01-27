const { tokenAuth } = require('../controllers/auth')
const express = require('express')

const router = express.Router()
router.post('/tokenCollect/:userId', tokenAuth)

module.exports=router