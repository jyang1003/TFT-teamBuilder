const express = require('express')
const router = express.Router()
const db = require('../models')


//routes to bring us to favorite teams
// router.get('/', (req, res) => {
//     db.favorite.findAll()
//         .then(faves => {
//             res.render('favorites', { results: faves })
//         })
//         .catch(error => {
//             console.error
//         })
// })
//routes to go to the specific team clicked
router.get('/:id', (req, res) => {
    // let teamName = req.params.name
    db.team.findOne({
        where: { id: req.params.id }
    })
        .then((teamName) => {
            res.render('favorites/favoriteTeam', { team: teamName })
        })
        .catch((error) => {
            console.log(error)
        })
    })

module.exports = router