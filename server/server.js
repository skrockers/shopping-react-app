const express = require('express');
const app = express();
const appLogger = require('./middleware/appLogger');
const PORT = 5000;
const cors = require('cors');

app.use((req,res,next) => {
    const logMessage = `${req.method} ${req.headers.origin} ${req.originalUrl}`;
    appLogger('generalLogs.txt', logMessage);
    next();
});
// app.use(cors());


app.get('/', (req,res)=> {
    if(res.status === 404) res.send('File not found')
    else res.send('Hodddme')
});

app.listen(PORT, ()=> console.log("Server started"));