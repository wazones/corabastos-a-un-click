var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var BaseModel, Store;
  BaseModel = require("models/BaseModel");
  Store = (function(_super) {
    __extends(Store, _super);

    function Store() {
      return Store.__super__.constructor.apply(this, arguments);
    }

    Store.prototype.urlRoot = function() {
      return Store.__super__.urlRoot.apply(this, arguments) + "/stores";
    };

    return Store;

  })(BaseModel);
  return Store;
});
