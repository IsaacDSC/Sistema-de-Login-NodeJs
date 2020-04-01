const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')

//inlcuindo arquivo para validação


//adionando routes
const home = require('./routes/home')
const cadastro = require('./routes/cadastro')

//configurando bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//configurando handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//carregando arquivos estaticos 
app.use(express.static(path.join(__dirname, 'public')))

//config da sessao
app.use(session({
    secret: 'systemLogin',
    resave: true,
    saveUninitialized: true
}))

//config flash
app.use(flash())

//config midleware flash
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.error_msg = req.flash('error_msg')
    next()
})


//config passport
app.use(passport.initialize())
app.use(passport.session())



//adionando Rotas
app.use('/', home)
app.use('/cadastro', cadastro)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor iniciado!`)
    console.log(`http://localhost:${PORT}`)
    console.log('BREAK SERVER ctrl + c')
})