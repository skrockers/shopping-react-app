const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
name:{
    type:String,
    required: true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
confirmPassword:{
    type: String,
    required: true
},
contactNo: {
    type:Number,
    required: true
}
});


module.exports = userSchema;