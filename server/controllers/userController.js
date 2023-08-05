const User = require('../models/userModel.js');

const userController = {};

userController.createUser = (req, res, next) => {
  if (!res.body.username || !res.body.password) {
    return next({
      log: 'Missing username or password',
      status: 500,
      message: { err: 'message says Missing username or password' },
    });
  }
  const { username, password } = res.body;

  const query = { username, password };

  const newUser = User.create(query);

  if (!newUser)
    return next({
      log: 'Failed to Create User',
      status: 500,
      message: { err: 'message says Failed to Create User' },
    });

  res.locals.newUser = newUser;
  return next();
};

userController.getUser = (req, res, next) => {
  if (!req.body)
    return next({
      log: 'no req body',
      status: 500,
      message: { err: 'message says no req body' },
    });
  const query = { username: req.body.username };

  const user = User.findOne(query);
  res.locals.user = user;
  return next();
};

module.exports = userController;
