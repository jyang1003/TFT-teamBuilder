const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/:championName', (req, res)=> {

    db.champion.findOne({
        where: { championName: req.params.championName }
    })
    .then(champs=> {
        res.render('championData', {champs: champs})
    })
    .catch(error =>{
        console.log(error)
    })

module.exports = router

//team/:id
// -team db by id
//homepage
//favorites
//- favorites limit teamId, team has userId 
//history 
//history database limit by teamId, 
//builder
//display champs using champId, create team Id when done
//championData/:id



//DATABASE

//champions: id
//favorites: id, teamId
//teams: id, userId
//history: id, teamId
//
