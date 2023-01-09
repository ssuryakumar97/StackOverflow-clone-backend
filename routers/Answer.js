const express = require('express')



const router = express.Router()
const AnswerDB = require('../models/Answer');

router.post('/', async( req, res) => {
    const answerData = new AnswerDB({
        question_id: req.body.question_id,
        answer: req.body.answer,
        user: req.body.user
    })

    await answerData.save().then((doc)=>{
        res.status(201).send({
            status: true,
            data: doc
        })
    }).catch((err) => {
        rest.status(400).send({
            status: false,
            message: "Error while adding answer"
        })
    })
});

router.get('/', async(req, res) => {
    
})

module.exports = router;
