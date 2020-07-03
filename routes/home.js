const express = require('express')
const router = express.Router()


//adionando models
const Post = require('../models/Post')

router.get('/', (req, res) => {
    res.render('login/login')
})

router.post('/auth', (req, res) => {
    Post.findOne({ email: req.body.email, password: req.body.password }).then(({ email, password }) => {
        if (email == req.body.email && password == req.body.password) {
            console.log('login senha batem')
            res.send('Seja bem vindo!')
        } else {
            res.send('Login e senha nao batem')
        }
    }).catch((err) => {
        console.log('login e senha nao batem:   ' + err)

    })
})

module.exports = router