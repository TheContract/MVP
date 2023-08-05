 const User = require('../models/userModel');


const userController = {};



userController.getUser = async (req, res, next) => {
    console.log('getuser invoked')
    if (!req.body)
      return next({
        log: 'no req body',
        status: 500,
        message: { err: 'message says no req body' },
      });

      if (!req.body.username || !req.body.password) {
        return next({
          log: 'Missing username or password',
          status: 500,
          message: { err: 'message says Missing username or password' },
        });
      }
    try {
        const { username, password } = req.body;
        const query = { username: username, password: password };
        const user = await User.findOne(query);
        res.locals.user = user;
        return next();

    }
    catch {
        next({err: 'error retrieving user from database'})
    }
  };

userController.createUser = async (req, res, next) => {
   
    if (!req.body.username || !req.body.password) {
      return next({
        log: 'Missing username or password',
        status: 500,
        message: { err: 'message says Missing username or password' },
      });
    }

    try {
        const { username, password } = req.body;
      
        const query = { username: username, password: password };
      
        const newUser = await User.create(query);
    
        console.log(newUser);
      
        if (!newUser)
          return next({
            log: 'Failed to Create User',
            status: 500,
            message: { err: 'message says Failed to Create User' },
          });
      
        res.locals.newUser = newUser;
        return next();
    }

    catch {
        next({err: 'error creating user'})
    }
  };
  



module.exports = userController;