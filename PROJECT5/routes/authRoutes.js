const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/register', (req, res) => {
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
}));

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
