const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Login
router.get('/login', (req, res) => res.render('login'));

router.post('/login', passport.authenticate('local', {
    successRedirect: '/trainers',
    failureRedirect: '/login'
}));

// Register
router.get('/register', (req, res) => res.render('register'));

router.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body;
    let hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();
    res.redirect('/login');
});

module.exports = router;