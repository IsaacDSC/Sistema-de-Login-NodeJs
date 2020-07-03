const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const Post = require('../models/Post')


router.get('/', (req, res) => {
    res.render('cadastro/cadastro')
})


router.post('/', (req, res) => {
    var erros = []

    /*  const newUser = new Post({
             nome: req.body.name,
             email: req.body.email,
             password: req.body.senha
         }) */
    /* res.send(req.body.senha) */
    /* var senha = req.body.senha */
    if (!req.body.name || req.body.name == undefined || req.body.name == null) {
        erros.push({ message: "Nome iválido!" })
            /* res.send('input undfine or input null') */
    }
    if (!req.body.email || req.body.email == undefined || req.body.email == null) {
        erros.push({ message: "Email iválido!" })
            /* res.send('input undfine or input null') */
    }
    if (!req.body.senha || req.body.senha == undefined || req.body.senha == null) {
        erros.push({ message: "Senha iválido!" })
            /* res.send('input undfine or input null') */
    }
    if (req.body.senha.length <= 4) {
        erros.push({ message: "Senha Muito Curta" })
    }
    if (erros.length > 0) {
        res.render('cadastro/cadastro', { erros: erros })
    } else {
        const FindEmail = Post.findByPK(req.body.email)
        if (FindEmail == req.body.email) {
            res.send(user.email)
            erros.push({ message: "Email já Cadastrado" })
        } else {
            res.send('foi para ultimo else')
                /* bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) {
                            res.send('Houve algum erro ao salvamento do usuario' + err)
                        } else {
                            newUser.password = hash
                            newUser.save();
                            //senha = hash
                            //res.send(senha)
                        }
                    })
                }) */
        }

    }
})


module.exports = router