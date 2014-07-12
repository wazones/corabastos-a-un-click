var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Backbone, BuyersHandler, FirstTimeHandler, MerchantsHandler, Router, StoresHandler;
  Backbone = require("backbone");
  FirstTimeHandler = require("handlers/FirstTimeHandler");
  BuyersHandler = require("handlers/BuyersHandler");
  MerchantsHandler = require("handlers/MerchantsHandler");
  StoresHandler = require("handlers/StoresHandler");
  Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.routes = {
      "": "home",
      "first-time/:action": "firstTime",
      "merchants/:action": "merchants",
      "buyers/:action": "buyers",
      "stores/:action": "stores"
    };

    Router.prototype.home = function() {
      var firtTime, loggedin;
      firtTime = true;
      loggedin = false;
      if (loggedin) {
        console.log("user is logged in");
      } else {
        this.navigate("/first-time/home", {
          trigger: true,
          replace: true
        });
      }
    };

    Router.prototype.firstTime = function(action) {
      var firstTimeHandler;
      firstTimeHandler = new FirstTimeHandler();
      firstTimeHandler.handle({
        action: action
      });
    };

    Router.prototype.merchants = function(action) {
      var merchantsHandler;
      merchantsHandler = new MerchantsHandler();
      merchantsHandler.handle({
        action: action
      });
    };

    Router.prototype.buyers = function(action) {
      var buyersHandler;
      buyersHandler = new BuyersHandler();
      buyersHandler.handle({
        action: action
      });
    };

    Router.prototype.stores = function(action) {
      var storesHandler;
      storesHandler = new StoresHandler();
      storesHandler.handle({
        action: action
      });
    };

    return Router;

  })(Backbone.Router);
  return Router;
});
