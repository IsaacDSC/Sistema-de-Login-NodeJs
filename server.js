const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const Sequelize = require('sequelize')
const Post = require('./models/Post')

//configurando bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//configurando handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//carregando arquivos estaticos 
app.use(express.static(path.join(__dirname, 'public')))

//adionando Rotas
app.get('/', (req, res) => {
    res.render('login/login')
})
app.get('/cadastro', (req, res) => {
    res.render('cadastro/cadastro')
})
app.post('/add', (req, res) => {
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


const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor iniciado!`)
    console.log(`http://localhost:${PORT}`)
    console.log('BREAK SERVER ctrl + c')
})