const User = require('../models/userModel.js');
const bcrypt = require('bcryptjs');

const userController = {};

userController.verifyUser = async (req, res, next) => {
  if (!req.body)
    return next({
      log: 'no req body',
      status: 500,
      message: { err: 'no req body' },
    });
  if (!req.body.username || !req.body.password) {
    return next({
      log: 'Missing username or password',
      status: 500,
      message: { err: 'missing username or password' },
    });
  }
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (user === null) {
      console.log('no user found');
      return next({
        log: 'User not found',
        status: 500,
        message: { err: 'User not found' },
      });
    }
    const checkResult = await bcrypt.compare(password, user.password);
    if (!checkResult) {
      return next({
        log: 'incorrect password',
        status: 500,
        message: { err: 'incorrect password' },
      });
    } else if (checkResult) {
      res.locals.user = user;
      return next();
    }
  } catch {
    next({ err: 'error retrieving user from database' });
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

    if (!newUser)
      return next({
        log: 'Failed to Create User',
        status: 500,
        message: { err: 'message says Failed to Create User' },
      });

    res.locals.newUser = newUser;
    return next();
  } catch {
    next({ err: 'error creating user' });
  }
};

module.exports = userController;
