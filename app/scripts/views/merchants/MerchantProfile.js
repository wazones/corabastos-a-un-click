var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Backbone, MerchantModel, MerchantProfile, merchantsProfileTpl, templates;
  Backbone = require("backbone");
  templates = require("templates");
  MerchantModel = require("models/MerchantModel");
  merchantsProfileTpl = templates["merchants.profile"];
  MerchantProfile = (function(_super) {
    __extends(MerchantProfile, _super);

    function MerchantProfile() {
      return MerchantProfile.__super__.constructor.apply(this, arguments);
    }

    MerchantProfile.prototype.el = "<div/>";

    MerchantProfile.prototype.initialize = function() {
      this.listenTo(this.model, "change", this.render);
      this.model.fetch();
    };

    MerchantProfile.prototype.render = function() {
      var tpl;
      tpl = merchantsProfileTpl({
        merchant: this.model.toJSON()
      });
      this.$el.html(tpl);
      $("#content").html(this.$el);
    };

    return MerchantProfile;

  })(Backbone.View);
  return MerchantProfile;
});
