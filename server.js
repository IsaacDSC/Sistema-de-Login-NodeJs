const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

//configurando bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//configurando handlebars
app.engine('handlebars', handlebars({ defaultLayout: main }))
app.set('view engine', 'handlebars')

//carregando arquivos estaticos 
app.use(express.static(path.join(__dirname, 'public')))

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor iniciado!`)
    console.log(`http://localhost:${PORT}`)
    console.log('BREAK SERVER ctrl + c')
})