var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Backbone, BaseCollection, Store, StoresCollection;
  Backbone = require("backbone");
  Store = require("models/Store");
  BaseCollection = require("collections/BaseCollection");
  StoresCollection = (function(_super) {
    __extends(StoresCollection, _super);

    function StoresCollection() {
      return StoresCollection.__super__.constructor.apply(this, arguments);
    }

    StoresCollection.prototype.url = function() {
      return StoresCollection.__super__.url.call(this) + "/stores";
    };

    StoresCollection.prototype.model = Store;

    return StoresCollection;

  })(BaseCollection);
  return StoresCollection;
});
