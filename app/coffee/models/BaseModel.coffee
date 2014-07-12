define (require) ->
  Backbone = require "backbone"

  class BaseModel extends Backbone.Model
    urlRoot : ()->
     return "https://corabastos-a-un-click-backend.herokuapp.com"
    sync: (method, model, options) ->
      options.dataType = "json"
      return Backbone.sync(method, model, options)

  return BaseModel