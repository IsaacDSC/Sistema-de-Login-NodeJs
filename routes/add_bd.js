const express = require('express')
const router = express.Router()
const bcryptjs = require('bcryptjs')

const Post = require('../models/Post')

router.get('/', (req, res) => {
    const pwd = 'secret'
    bcryptjs.genSalt(10, (err, salt) => {
        bcryptjs.hash(pwd, salt, (err, hash) => {
            if (err) {
                res.send('Erro ao Criptgrafar a senha: ' + err)
            } else {
                const password = hash
                Post.create({
                    nome: 'admin',
                    email: 'admin@hotmail.com',
                    password: password
                }).then(() => {
                    res.send('administrador cadastrado com sucesso!')
                }).catch((err) => {
                    res.send('Erro ao cadastrar administrador:  ' + err)
                })
            }
        })
    })

})
router.get('/teste', (req, res) => {
    Post.create({
        nome: 'admin',
        email: 'admin@hotmail.com',
        password: '123456'
    }).then(() => {
        res.send('administrador cadastrado com sucesso!')
    }).catch((err) => {
        res.send('Erro ao cadastrar administrador:  ' + err)
    })
})



module.exports = router