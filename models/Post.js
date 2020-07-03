 const db = require('./db')

 const Post = db.sequelize.define('usuarios', {
     nome: {
         type: db.Sequelize.STRING,
         required: true
     },
     email: {
         type: db.Sequelize.STRING,
         required: true
     },
     password: {
         type: db.Sequelize.STRING,
         required: true
     }

 })

 //criando table in database
 //Post.sync({ force: true })

 module.exports = Post