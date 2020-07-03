const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserByEMail, getUserById) {
    const athenticateUser = async(email, password, done) => {
        const user = getUserByEMail(email)
        if (user == null) {
            return done(null, false, { message: 'Email Não bate' })
        }
        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, { message: 'Senha Errada' })
            }
        } catch (err) {
            return done(err)
        }
    }

    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })
}

module.exports = initialize