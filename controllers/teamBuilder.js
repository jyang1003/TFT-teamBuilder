//routes to go to champ info
//add button, route to redirect to same page after add
const express = require('express')
const router = express.Router()
const db = require('../models')
const fs = require('fs')
const champion = require('../models/champion')
const teamChamps = require('../models/teamchamp')



router.get('/', (req, res) => {
    db.champion.findAll()
        .then(champs => {
            let allChamps = champs
            db.teamchamp.findAll(currentUser)
            .then(newChamp => {
                let teamChamp = newChamp
                res.render('teamBuilder', {champs: allChamps, newChamp: teamChamp})
            })
        })
        .catch(error => {
            console.log(error)
        })
})

router.post('/', (req, res) => {
    console.log('req.body', req.body)
    db.teamchamp.create({
        championName: req.body.name
    })
        .then(newChamp => {
            console.log('this is newChamp', newChamp)
            res.redirect(`/teamBuilder`)
        })
        .catch(error => {
            console.log(error)
        })
});
module.exports = router
// {newChamp: newChamp}
