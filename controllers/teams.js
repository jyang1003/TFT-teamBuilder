//route to look at teams
const express = require('express')
const router = express.Router()
const db = require('../models')
const fs = require('fs')

router.get('/', (req, res)=>{
    let teamList = db.teams
    res.render('teams', {teams: teamList})
})

module.exports = router