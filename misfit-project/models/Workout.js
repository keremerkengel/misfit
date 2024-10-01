const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    trainer: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer' },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Workout', WorkoutSchema);