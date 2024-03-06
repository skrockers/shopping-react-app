const mongoose = require('mongoose');
const {appLogger} = require('../middleware/appLogger');

const dBConnect = async(req,res,next) => {
    try{
        await mongoose.connect('mongodb+srv://jarvis:jarvis@main-app-cluster.dmvmoad.mongodb.net/?retryWrites=true&w=majority&appName=main-app-cluster');
        console.log('Connected to MangoDb Atlas');
    }catch(err){
        console.log(err.message);
        appLogger('errorLogs.txt',`${err.name}: ${err.message} `);
    }
    next();
    
}
module.exports = dBConnect;