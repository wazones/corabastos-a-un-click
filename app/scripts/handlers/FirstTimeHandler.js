define(function(require) {
  'use strict';
  var _ = require('underscore'),
    Handler = require('handlers/Handler'),
    Home = require('views/firstTime/Home'),
    Login = require('views/firstTime/Login'),
    Signup = require('views/firstTime/Signup')
  ;

  function FirstTimeHandler() {

  };
  FirstTimeHandler.prototype = Handler.prototype;

  FirstTimeHandler.prototype.home = function() {
    var home = new Home();
    home.render();
  };
  FirstTimeHandler.prototype.login = function() {
    var login = new Login();
    login.render();
  };
  FirstTimeHandler.prototype.signup = function() {
    var signup = new Signup();
    signup.render();
  };
  return FirstTimeHandler;
});