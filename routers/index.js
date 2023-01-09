const express = require('express');
const router = express.Router()
const questionRouter = require('./Question')
const answerRouter = require('./Answer')
const commentRouter =  require('./Comment')

router.get('/', (req, res) => {
    res.send('Welcome to stackoverflow clone tutorial api')
})

router.use('/question', questionRouter)
router.use('/answer', answerRouter)
router.use('/comment', commentRouter)

module.exports = router