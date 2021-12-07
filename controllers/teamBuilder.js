//routes to go to champ info
//add button, route to redirect to same page after add
const express = require('express')
const router = express.Router()
const db = require('../models')
const fs = require('fs')
const champion = require('../models/champion')


router.get('/', (req, res) => {
    db.champion.findAll()
        .then(champs => {
            res.render('teamBuilder', { champs: champs })
        })
        .catch(error => {
            console.log(error)
        })
})
router.post('/', (req, res) => {
    db.teamchamp.create({
        championName: db.champion.championName
    })
        .then(newChamp => {
            res.redirect(`/teamBuilder`)
        })
        .catch(error => {
            console.log(error)
        })
});
module.exports = router