const express = require('express');
const path= require('path');


/*Controllers */
const userController = require('../controllers/userController.js');

const apiRouter = express.Router();

apiRouter.get('/user', userController.getUser, ((req,res)=>{
    res.status(200).json(res.locals.user);
}));

apiRouter.post('/user', userController.createUser, ((req,res)=>{
    res.status(200).json(res.locals.newUser);
}));

apiRouter.get('/contract', ((req,res)=>{
    res.status(200).json('getting contract');
}));

apiRouter.post('/contract', ((req,res)=>{
    res.status(200).json('creating contract');
}));




apiRouter.get('/',(req,res)=>{
    console.log('apiRouter / path hit')
    return res.status(200).send('it worked');
});

module.exports = apiRouter;