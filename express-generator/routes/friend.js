const express  = require('express')
const router = express.Router()

var FC = require('../controller/friendController')

router.get('/' , FC.pageView)

router.post('/addData' , FC.addData)
router.delete('/deleteData/:id' , FC.deleteData)

module.exports = router
