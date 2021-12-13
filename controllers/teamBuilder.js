const express = require('express')
const router = express.Router()
const db = require('../models')
const fs = require('fs')
const champion = require('../models/champion')
const teamChamps = require('../models/teamchamp')
const { route } = require('./teamHistory')
const team = require('../models/team')
const isLoggedIn = require('../middleware/isLoggedIn')


router.get('/team', isLoggedIn, (req, res) => {
    res.render('./teamBuilder/team')
})
router.post('/newTeam', isLoggedIn, (req, res) => {
    console.log('req.user', req.user)
    db.team.create({
        name: req.body.name,
        userId: req.user.id
    })
        .then(teamName => {
            // console.log('req.body is', req.body)
            // console.log('this is team name:', teamName)
            res.redirect(`/teamBuilder/${teamName.name}`)
        })
        .catch(error => {
            console.log('error for teamHistory')
            console.log(error)
        })
})


router.get('/:teamName', isLoggedIn, (req, res) => {
    let teamName = req.params.teamName
    db.team.findOne({
        where: {name: req.params.teamName}
    })
    .then(foundTeam => {
        if(foundTeam.userId === req.user.id){
            db.champion.findAll() //database call
            .then(champs => { //pass info from database call into this promise chain
                let allChamps = champs //assign variable to the info
                db.teamchamp.findAll({
                    where: {teamId: foundTeam.id}
                })
                    .then(newChamp => { //pass that info into another promise chain
                        let teamChamp = newChamp //assign that info to teamChamp
                        console.log(teamChamp)
                        console.log('foundTeam.id', foundTeam.id)
                        res.render(`teamBuilder/teamBuilder`, { champs: allChamps, newChamps: teamChamp, teamName: teamName }) //render teamBuilder and pass all the info into ejs
                    })
                    .catch(error => {
                        console.log('error after db.teamchamp.findAll')
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log('error for get route teamBuilder')
                console.log(error)
            })
        }else {
            res.send('You are the wrong user!')
        }
    })
})
router.post('/:teamName/add', isLoggedIn, (req, res) => {
    let teamName = req.params.teamName
    console.log('req.body', req.body.name)
    db.champion.findOne({
        where: {championName: req.body.name}
    })
        .then(newChamp => {
            db.team.findOne({
                where: {name: req.params.teamName}
            })
            .then(team => {
                // console.log('newChamp', newChamp.championName)
                // console.log('team.id', team.id)
                // console.log(team)
                db.teamchamp.create({
                    championName: newChamp.championName,
                    teamId: team.id
                })
            })
            // console.log('this is newChamp', newChamp)
            // console.log('newChamp', newChamp)
            res.redirect(`/teamBuilder/${teamName}`)
        })
        .catch(error => {
            console.log('error for post route teamBuilder')
            console.log(error)
        })
});

router.post('/:teamName/delete', isLoggedIn, (req, res) => {
    let deleteTeamName = req.params.teamName
    db.teamchamp.destroy({
        where: { championName: req.body.name }
    })
    // console.log('req.body.name:', req.body)
    res.redirect(`/teamBuilder/${deleteTeamName}`)
})
module.exports = router