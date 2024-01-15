const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

router.get('/login', (req, res) => {
  res.send('Login page');
});

router.post('/login',
  passport.authenticate('local', { successRedirect: '/dashboard', failureRedirect: '/login', failureFlash: true })
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
