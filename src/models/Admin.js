const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    create_at: {
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model('Admin', AdminSchema, 'admins');