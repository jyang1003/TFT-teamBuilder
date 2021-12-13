const express = require('express')
const router = express.Router()
const db = require('../models')
const isLoggedIn = require('../middleware/isLoggedIn')

router.get('/', (req, res)=>{
    db.team.findAll({
        where: {userId: req.user.id}
    })
    .then(foundTeam => {
        res.render('teamHistory', {teams: foundTeam})
    })
})
    
module.exports = router