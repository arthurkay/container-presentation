const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('templates/home', {
       title: "Endless Entertainment" 
    })
})

router.get('/users', (req, res) => {
    res.render('templates/users', {
       title: "Users" 
    })
})

module.exports = router