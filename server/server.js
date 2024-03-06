const express = require('express');
const app = express();
const {logger} = require('./middleware/appLogger');
const PORT = 5000;
const cors = require('cors');
const accountRouter = require('./router/account');
const errorHandler = require('./middleware/errorHandler');
const dBConnect = require('./database/connection');

app.use(express.json());
app.use(logger);
app.use(cors());
app.use(dBConnect);
app.use('/account',accountRouter);

app.get('/',(req,res)=> {
    if(res.status === 404) res.send('File not found')
    else res.send('Hodddme')
});

app.use(errorHandler);

app.listen(PORT, ()=> console.log("Server started"));