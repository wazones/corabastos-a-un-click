var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var FirstTimeHandler, Handler, Home, Login, Signup, _;
  _ = require("underscore");
  Handler = require("handlers/Handler");
  Home = require("views/firstTime/Home");
  Login = require("views/firstTime/Login");
  Signup = require("views/firstTime/Signup");
  FirstTimeHandler = (function(_super) {
    __extends(FirstTimeHandler, _super);

    function FirstTimeHandler() {
      return FirstTimeHandler.__super__.constructor.apply(this, arguments);
    }

    FirstTimeHandler.prototype.home = function() {
      var home;
      home = new Home();
      return home.render();
    };

    FirstTimeHandler.prototype.login = function() {
      var login;
      login = new Login();
      return login.render();
    };

    FirstTimeHandler.prototype.signup = function() {
      var signup;
      signup = new Signup();
      return signup.render();
    };

    return FirstTimeHandler;

  })(Handler);
  return FirstTimeHandler;
});
