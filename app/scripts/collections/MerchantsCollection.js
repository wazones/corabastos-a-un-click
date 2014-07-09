var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Backbone, BaseCollection, Merchant, MerchantsCollection;
  Backbone = require("backbone");
  Merchant = require("models/Merchant");
  BaseCollection = require("collections/BaseCollection");
  MerchantsCollection = (function(_super) {
    __extends(MerchantsCollection, _super);

    function MerchantsCollection() {
      return MerchantsCollection.__super__.constructor.apply(this, arguments);
    }

    MerchantsCollection.prototype.url = function() {
      return MerchantsCollection.__super__.url.call(this) + "/merchants";
    };

    MerchantsCollection.prototype.model = Merchant;

    return MerchantsCollection;

  })(BaseCollection);
  return MerchantsCollection;
});
