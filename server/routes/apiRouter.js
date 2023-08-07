const express = require('express');
const path= require('path');


/*Controllers */
const userController = require('../controllers/userController.js');
const cookieController = require('../controllers/cookieController.js');
const sessionController = require('../controllers/sessionController.js');
const contractController = require('../controllers/contractController.js');
const buddyController = require('../controllers/buddyController.js');

const apiRouter = express.Router();

// login route
apiRouter.post('/login', userController.verifyUser, cookieController.setSSIDCookie, sessionController.startSession, ((req,res)=>{
    res.status(200).json(res.locals.user);
}));

// signup route 
apiRouter.post('/user', userController.createUser, cookieController.setSSIDCookie, sessionController.startSession, ((req,res)=>{
    res.status(200).json(res.locals.newUser);
}));

// retrieve contract route
apiRouter.get('/contract', sessionController.isLoggedIn, contractController.findContract, ((req,res)=>{
    res.status(200).json(res.locals.contract);
}));

// create contract route - going to add buddy notification middleware here
apiRouter.post('/contract', sessionController.isLoggedIn, contractController.createContract, buddyController.notifyBuddy, ((req,res)=>{
    // console.log('the locals are' + res.locals.ssid)
    res.status(200).json(res.locals.contract);
}));

apiRouter.get('/',(req,res) => {
    console.log('apiRouter / path hit')
    return res.status(200).send('it worked');
});

module.exports = apiRouter;