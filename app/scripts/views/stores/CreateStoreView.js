var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Backbone, CreateStoreView, Store, Tpl, templates;
  Backbone = require("backbone");
  templates = require("templates");
  Store = require("models/Store");
  Tpl = templates["stores.create"];
  CreateStoreView = (function(_super) {
    __extends(CreateStoreView, _super);

    function CreateStoreView() {
      return CreateStoreView.__super__.constructor.apply(this, arguments);
    }

    CreateStoreView.prototype.el = "<div/>";

    CreateStoreView.prototype.initialize = function() {
      if (this.model == null) {
        this.model = new Store();
      }
      this.listenTo(this.model, "change", this.render);
      this.model.fetch();
    };

    CreateStoreView.prototype.render = function() {
      var tpl;
      tpl = Tpl();
      this.$el.html(tpl);
      $("#content").html(this.$el);
    };

    return CreateStoreView;

  })(Backbone.View);
  return CreateStoreView;
});
