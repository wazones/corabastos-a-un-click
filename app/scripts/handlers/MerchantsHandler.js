var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Handler, MerchantProfile, MerchantsHandler, _;
  _ = require("underscore");
  Handler = require("handlers/Handler");
  MerchantProfile = require("views/merchants/MerchantProfile");
  MerchantsHandler = (function(_super) {
    __extends(MerchantsHandler, _super);

    function MerchantsHandler() {
      return MerchantsHandler.__super__.constructor.apply(this, arguments);
    }

    MerchantsHandler.prototype.profile = function() {
      var profile;
      profile = new MerchantProfile();
      profile.render();
    };

    return MerchantsHandler;

  })(Handler);
  return MerchantsHandler;
});
