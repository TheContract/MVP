const express = require('express');
const path= require('path');

/*Controllers */
const userController = require('../controllers/userController.js');

const apiRouter = express.Router();



apiRouter.get('user/:id',userController.getUser,((req,res)=>{
    res.status(200).json({});
})


apiRouter.get('/',(req,res)=>{
    console.log('apiRouter / path hit')
    return res.status(200);
})

module.exports = apiRouter;