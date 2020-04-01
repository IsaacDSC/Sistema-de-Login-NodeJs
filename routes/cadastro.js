const express = require('express')
const router = express.Router()
const bcryptjs = require('bcryptjs')
const Post = require('../models/Post')

router.get('/', (req, res) => {
    res.render('cadastro/cadastro')
})

router.post('/add', (req, res) => {
    //res.send('nome: ' + req.body.nome + 'email:' + req.body.email + 'numero' + req.body.numero + 'senha' + req.body.password)
    Post.create({
        nome: req.body.nome,
        email: req.body.email,
        numero: req.body.numero,
        senha: req.body.senha
    }).then(function() {
        res.send('Cadastro enviado com sucesso')
    }).catch(function(erro) {
        res.send('error: ' + erro)
    })
})

module.exports = router