const mongoose = require('mongoose');

const TrainerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String },
    workouts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }]
});

module.exports = mongoose.model('Trainer', TrainerSchema);