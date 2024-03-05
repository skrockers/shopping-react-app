const { log } = require('node:console');
const fs = require('node:fs');
const fsPromises = require('node:fs/promises');
const path = require('path');
const {v4: uuidv4} = require('uuid');
const logRootDirectory = path.join(__dirname,'..');
1000 
const appLogger = async(logFilename, logMessage) => {
const uuid = require('uuid');
const logContent = `${new Date().toISOString()} \t ${uuidv4()} \t ${logMessage} \n`;
    try{
        if(fs.existsSync(path.join(logRootDirectory,'Logs',logFilename))) {
            await fsPromises.appendFile(path.join(logRootDirectory,'Logs',logFilename), logContent);
        }
        else{
            console.log('File not exists');
        }
    }catch(err){
        console.log(err)
    }


   
   
       
}
   
    


module.exports = appLogger;