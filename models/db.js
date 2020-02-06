const Sequelize = require('sequelize')
const sequelize = new Sequelize('SistemaLoginNodeJs', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function() {
    console.log('Conectado com sucesso')
}).catch(function(erro) {
    console.log('Erro ao se conectar' + erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}