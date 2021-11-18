const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/:name', (req, res)=> {
    db.champions.findOne({
        where: { id: req.params.name }
    })
    res.render('champions', {champData: champion})
})

module.exports = router