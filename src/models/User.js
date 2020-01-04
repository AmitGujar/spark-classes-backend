const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
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
    fees_paid: {
        total: {
            type: Number
        },
        paid: {
            type: Number
        }
    },
    course_type: {
        type: String
    },
    registration_date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('User', UserSchema);