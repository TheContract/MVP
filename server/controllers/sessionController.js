const Session = require('../models/sessionModel.js');
const path = require('path');

const sessionController = {};

/**
* isLoggedIn - find the appropriate session for this request in the database, then
* verify whether or not the session is still valid.
*/
sessionController.isLoggedIn = async (req, res, next) => {
  // write code here
//   console.log('the cookies are' + req.cookies)
//   console.log(req.cookies);
  
  try {
    const { ssid } = req.cookies;
    res.locals.ssid = ssid;
    console.log(ssid);
    const query = await Session.findOne({ cookieId: ssid });
    // console.log(query);
    if (!query) {
        next({
            log: 'session expired',
            status: 500,
            message: { err: 'no session found'},
          })
    } else {
        console.log('going to the contract controller')
        // console.log('the locals are' + res.locals)
        return next();
    }
    }
    catch {
      next({
        log: 'error verifying session',
        status: 500,
        message: { err: 'error verifying session'},
      })
    }
};

/**
* startSession - create and save a new Session into the database.
*/
sessionController.startSession = async (req, res, next) => {
  //write code here
  if (res.locals.ssid) {

    // checks for a valid session
    const foundSesh = await Session.findOne({cookieId: res.locals.ssid});
    if (foundSesh) {
        next();
    }
    // otherwise starts one
    else {
        const sesh = await Session.create({cookieId: res.locals.ssid});
        next()
    } 
  }
  else {
    next({
        log: 'error starting session',
        status: 500,
        message: { err: 'error starting session, invalid ssid'},
      });
  }
  
};

module.exports = sessionController;
