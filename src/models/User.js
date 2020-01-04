const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    full_name: {
        type: String
    },
    address: {
        type: String
    },
    date_of_birth: {
        type: String
    },
    mobile_number: {
        type: Number,
        maxlength: 10
    },
    image_path: {
        type: String
    }
    ,
    qualification: {
        type: String
    },
    reference_from: {
        type: String
    },
    batch_timing: {
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
    remark: {
        type: String
    },
    registration_date: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('User', UserSchema, 'users');