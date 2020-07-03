const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

const Usuarios = require('../models/Post')



module.exports = function(passport) {
    passport.use(new LocalStrategy({}))
}