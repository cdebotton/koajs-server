var React       = require('react');
var App         = require('./App.jsx');
var HomeHandler = require('./HomeHandler.jsx');
var FooHandler  = require('./FooHandler.jsx');
var {Route, DefaultRoute, NotFoundRoute} = require('react-router');

module.exports = (
  <Route handler={App}>
    <DefaultRoute name="index" handler={HomeHandler} />
    <Route name="foo" handler={FooHandler} />
  </Route>
);
