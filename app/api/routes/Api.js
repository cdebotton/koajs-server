var Router          = require('koa-router');
var passport        = require('./passport');
var usersService    = require('../services/usersService');
var authService     = require('../services/authService');
var Api             = new Router();

var bearer = passport.authenticate('bearer', {session: false});

Api.get('/users', bearer, function *() {
  var users = yield usersService.all();
  this.body = JSON.stringify(users);
});

Api.get('/users/:userId', bearer, function *() {
  var userId = this.req.params.userId;
  var user = yield usersService.findById(userId);
  this.body = JSON.stringify(user);
});

Api.post('/users', bearer, function *() {
  var body = this.req.body;
  var user = yield usersService.create(body);
  this.body = JSON.stringify(user);
});

Api.delete('/users/:userId', bearer, function *() {
  var userId = this.req.params.userId;
  yield usersService.destroy(userId);
});

Api.get('/login', function *(next) {
  try {
    var user = yield authService.login(this.req, this.res);
    this.body = JSON.stringify(user);
  }
  catch (err) {
    this.status = 500;
    this.body = JSON.stringify(err);
  }
});

Api.post('/logout', function *(next) {
  var key = this.req.body.key;
  yield authService.logout(key);
});

module.exports = Api;
