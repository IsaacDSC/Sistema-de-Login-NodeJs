const db = require('./db')
const Post = db.sequelize.define('usuarios', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    DDD: {
        type: db.Sequelize.STRING
    },
    numero: {
        type: db.Sequelize.STRING
    },
    trabalho: {
        type: db.Sequelize.STRING
    },
    password: {
        type: db.Sequelize.STRING
    }

})

//criando table in database
Post.sync({ force: true })