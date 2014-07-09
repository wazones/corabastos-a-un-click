define (require) ->
  Backbone = require "backbone"

  class BaseModel extends Backbone.Model
    urlRoot : ()->
     return "https://corabastos-a-un-click-backend.herokuapp.com"

  return BaseModel