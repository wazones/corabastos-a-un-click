var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var BaseModel, MerchantModel;
  BaseModel = require("models/BaseModel");
  MerchantModel = (function(_super) {
    __extends(MerchantModel, _super);

    function MerchantModel() {
      return MerchantModel.__super__.constructor.apply(this, arguments);
    }

    MerchantModel.prototype.urlRoot = function() {
      return MerchantModel.__super__.urlRoot.apply(this, arguments) + "/merchants";
    };

    return MerchantModel;

  })(BaseModel);
  return MerchantModel;
});
