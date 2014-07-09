var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Backbone, BaseCollection;
  Backbone = require("backbone");
  BaseCollection = (function(_super) {
    __extends(BaseCollection, _super);

    function BaseCollection() {
      return BaseCollection.__super__.constructor.apply(this, arguments);
    }

    BaseCollection.prototype.url = function() {
      return "https://corabastos-a-un-click-backend.herokuapp.com";
    };

    return BaseCollection;

  })(Backbone.Collection);
  return BaseCollection;
});
