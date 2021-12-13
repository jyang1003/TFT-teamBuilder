const express = require('express')
const router = express.Router()
const db = require('../models')
const isLoggedIn = require('../middleware/isLoggedIn')
const team = require('../models/team')


// routes to bring us to favorite teams
router.get('/', isLoggedIn, (req, res) => {
    db.team.findAll({
        where: {favorite: true,
                userId: req.user.id
            }
    }).then(favoriteTeams => {
        res.render('favorites', {favTeams: favoriteTeams})
    })
})

router.post('/add', isLoggedIn, (req, res) => {
    db.team.update(
        {favorite: true},
        {where: {id: req.body.id,
                userId: req.user.id
        }}
    )
    .then(addedFave => {
        res.redirect(`/teamHistory`)
    })
})

module.exports = router