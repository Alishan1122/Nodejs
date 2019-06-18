var mongoose = require('mongoose');

// Setup schema
var userSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    profile:{
        type: String,
        required: 'URL cant be empty',
        unique: true
    },
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export User model
var User = module.exports = mongoose.model('user', userSchema);

userSchema.path('profile').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');


module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}