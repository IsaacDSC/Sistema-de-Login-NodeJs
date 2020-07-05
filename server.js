const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const session = require('express-session')
const passport = require('passport')
require('./config/auth')(passport)

//adionando routes
const home = require('./routes/home')
const cadastro = require('./routes/cadastro')
const add_bd = require('./routes/add_bd')


//configurando bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
    //configurando handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
    //carregando arquivos estaticos 
app.use(express.static(path.join(__dirname, 'public')))
    //consfig sessão
app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    }))
    //config passport
app.use(passport.initialize())
app.use(passport.session())

//adionando Rotas
app.use('/', home)
app.use('/cadastro', cadastro)
app.use('/add_bd', add_bd)



const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor iniciado!`)
    console.log(`http://localhost:${PORT}`)
    console.log('BREAK SERVER ctrl + c')
})