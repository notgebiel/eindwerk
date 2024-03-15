const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { createHash } = require('hash.js');

const users = [
    {id: 1, username: 'pik', password: 'en ballen'},
    {id: 2, username: 'ballen', password: 'en pik'}
]

const hashPassword = (password) => {
    const sha256 = createHash('sha256');
    sha256.update(password);
    return sha256.digest('hex');
}

passport.use(new LocalStrategy(
    {usernameField: 'username', passwordField: 'password' },
    (username, password, done) => {
        const user = users.find(user => user.username === username && user.passwordHash === hashPassword(password));
        if (!user) {
            return done(null ,false, { message: 'Incorrect username or password' });

        }
        return done(null, user);
    }
));

passport.deserializeUser((id, done) => {
    const user = users.find(user => user.id === id);
    done(null, user);
})

module.exports = passport;