define (require)->

  Backbone = require "backbone"
  templates = require "templates"
  Store = require "models/Store"
  Tpl = templates["stores.create"]

  class CreateStoreView  extends Backbone.View
    el: "<div/>"

    initialize : ()->
      if not @.model?
        @.model = new Store()

      @.listenTo(@.model, "change", @.render)
      @.model.fetch()
      return

    render : ()->
      tpl = Tpl()
      @.$el.html(tpl)
      $("#content").html(@.$el)
      return

  return CreateStoreView