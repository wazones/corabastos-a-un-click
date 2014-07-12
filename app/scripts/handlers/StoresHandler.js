var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var CreateStoreView, Handler, Store, StoresHandler, _;
  _ = require("underscore");
  Handler = require("handlers/Handler");
  CreateStoreView = require("views/stores/CreateStoreView");
  Store = require("models/Store");
  StoresHandler = (function(_super) {
    __extends(StoresHandler, _super);

    function StoresHandler() {
      return StoresHandler.__super__.constructor.apply(this, arguments);
    }

    StoresHandler.prototype.create = function() {
      var createStoreView;
      createStoreView = new CreateStoreView();
    };

    return StoresHandler;

  })(Handler);
  return StoresHandler;
});
