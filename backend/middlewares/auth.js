const passport = require('../passport');

// Middleware to check if a user is authenticated
const isAuthenticated = (req, res, next) => {
    console.log('auth')
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({ message: 'Authentication required.' });
    }
    console.log({user})
    // Attach the user to the request object for later use
    req.user = user;
    next();
  })(req, res, next);
};

module.exports = isAuthenticated;
