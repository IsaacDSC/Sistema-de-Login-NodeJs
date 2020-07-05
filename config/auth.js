const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

const Usuarios = require('../models/Post')
const passport = require('passport')



module.exports = function(passport) {
    passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, (email, senha, done) => {

        Usuarios.findOne({ where: { email: email } }).then((user) => {
            if (!user) {
                return done(null, false, { message: 'Esta conta não Existe' })
            }
            bcrypt.compare(senha, user.password, (err, batem) => {
                if (batem) {
                    return done(null, user)
                } else {
                    return done(null, false, { message: "Senha Incorreta" })
                }
            })
        })
    }))


    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    passport.deserializeUser((id, done) => {
        Usuarios.findByPk(id, (err, user) => {
            done(err, user)
        })
    })

}