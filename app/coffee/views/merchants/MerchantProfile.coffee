define (require)->

  Backbone = require "backbone"
  templates = require "templates"
  MerchantModel = require "models/MerchantModel"
  merchantsProfileTpl = templates["merchants.profile"]

  class MerchantProfile extends Backbone.View
    el: "<div/>"

    initialize: ()->
      @.listenTo(@.model, "change", @.render)
      @.model.fetch()
      return

    render : ()->
      tpl = merchantsProfileTpl
        merchant : @.model.toJSON()

      @.$el.html(tpl)
      $("#content").html(@.$el)
      return

  return MerchantProfile