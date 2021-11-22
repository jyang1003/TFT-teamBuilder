//routes to go to champ info
//add button, route to redirect to same page after add
const express = require('express')
const router = express.Router()
const db = require('../models')
const fs = require('fs')


router.get('/', (req, res)=>{
    db.champion.findAll()
    .then(champs=> {
        res.render('teamBuilder', {champs: champs})
    })
    .catch(error =>{
        console.log(error)
    })
    
})

module.exports = router