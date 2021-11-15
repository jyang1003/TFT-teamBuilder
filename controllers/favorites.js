const express = require('express')
const router = express.Router()
const db = require('../models')


//routes to bring us to favorite teams
router.get('/favorites', (req, res)=>{
    db.favorite.findAll()
    .then(faves => {
        res.render('favorites', { results: faves })
    })
    .catch(error => {
        console.error
    })
})
//routes to go to the specific team clicked
//routes to get champion info of those teams

module.exports = router