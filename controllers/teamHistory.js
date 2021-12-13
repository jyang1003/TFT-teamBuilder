const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', (req, res)=>{
    res.render('teamHistory/teamHistory')
})

// router.get('/:teamName', (req, res)=>{
//     let data = db.team.findOne({
//         where: {name: req.params.teamName}
//     })
//     res.render(`teamHistory/teamHistory`, {data: data})
// })
// router.post('/', (req, res) => {
//     console.log('req.body', req.body)
//     db.team.create({
//         name: req.body.name
//     })
//     .then(teamName => {
//         console.log('req.body is', req.body)
//         console.log('this is team name:', teamName)
//         res.redirect(`/teamBuilder/${teamName.name}`)
//     })
//     .catch(error => {
//         console.log('error for teamHistory')
//         console.log(error)
//     })
// })

    
module.exports = router


// <%data.forEach((team) => {%>
//     <li><a href="/championData/<%=team.name%>"><%= team.name%></a></li>
//     <form action="/favorites" method="POST">
//      <input hidden type="text" name="name" value="<%= newChamp.championName %>">
//      <button value="<%= newChamp.championName%>" type="submit">Add to Favorites</button>
//  </form>    <%})%>