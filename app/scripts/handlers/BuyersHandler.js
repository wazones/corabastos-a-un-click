var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var BuyerProfile, BuyersHandler, Handler, _;
  _ = require("underscore");
  Handler = require("handlers/Handler");
  BuyerProfile = require("views/buyers/BuyerProfile");
  BuyersHandler = (function(_super) {
    __extends(BuyersHandler, _super);

    function BuyersHandler() {
      return BuyersHandler.__super__.constructor.apply(this, arguments);
    }

    BuyersHandler.prototype.profile = function() {
      var profile;
      profile = new BuyerProfile();
      profile.render();
    };

    return BuyersHandler;

  })(Handler);
  return BuyersHandler;
});
