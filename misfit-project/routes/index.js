const express = require('express');
const router = express.Router();
const Trainer = require('../models/Trainer');
const Workout = require('../models/Workout');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/trainers', async (req, res) => {
    const trainers = await Trainer.find({});
    res.render('trainers', { trainers });
});

router.get('/gallery', (req, res) => {
    res.render('gallery');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

module.exports = router;