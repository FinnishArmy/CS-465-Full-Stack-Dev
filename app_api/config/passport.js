const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const passport = require('passport');
const User = mongoose.model('users');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return done(null, false, { message: 'Incorrect email.' });
        }

        // Use the guide's approach: compare hash manually
        const crypto = require('crypto');
        const hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, 'sha512').toString('hex');
        if (hash !== user.hash) {
            return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);

    } catch (err) {
        return done(err);
    }
}));
