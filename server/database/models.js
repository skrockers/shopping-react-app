const userSchema = require('./schemas/userSchema');
const mongoose =require('mongoose');

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;