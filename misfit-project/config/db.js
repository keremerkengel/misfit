const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/misfit_project', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Database connection error:', err);
});