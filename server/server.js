const express = require('express');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

/* Start Server */
app.listen(PORT,()=>{
    console.log(`The server is listening...hide your kids. Hide your wives...On Port:${PORT}`)
})

/** parsers **/
app.use(express.json());
app.use(cookieParser())

/** maniputalor **/
app.use(express.urlencoded())

/**
 *Routers - require, then define
 **/
const apiRouter = require(`${__dirname}/routes/apiRouter.js`);
app.use('/api',apiRouter);



app.get('/',(req,res)=>{
    return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
})

// app.use('*',(req,res)=>{
//     return res.status(404).send('Not Found')
// })

app.use((err,req,res,next)=>{
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
      };
      const errorObj = Object.assign({}, defaultErr, err);
      console.log(errorObj.log);
      return res.status(errorObj.status).json(errorObj.message);
})

module.exports = app;