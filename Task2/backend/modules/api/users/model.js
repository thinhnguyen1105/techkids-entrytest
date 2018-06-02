const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

const userModel = new Schema({
    username: {
        type: String,
        required: true
    },
    fullname:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
            },
            message: "{VALUE} is not a valid email address"
        }
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword:{
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: {
        createdAt: "createdAt"
    }
});


userModel.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    bcrypt
        .genSalt(12)
        .then(salt => bcrypt.hash(this.password, salt))
        .then(hash => {
            console.log("hashing")
            this.password = hash;
            next();
        })
        .catch(err => next(err))
})

module.exports = mongoose.model('user', userModel);