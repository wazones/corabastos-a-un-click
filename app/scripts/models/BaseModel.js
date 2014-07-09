var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Backbone, BaseModel;
  Backbone = require("backbone");
  BaseModel = (function(_super) {
    __extends(BaseModel, _super);

    function BaseModel() {
      return BaseModel.__super__.constructor.apply(this, arguments);
    }

    BaseModel.prototype.urlRoot = function() {
      return "https://corabastos-a-un-click-backend.herokuapp.com";
    };

    return BaseModel;

  })(Backbone.Model);
  return BaseModel;
});
