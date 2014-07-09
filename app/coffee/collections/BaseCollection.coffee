define (require)->
  Backbone = require "backbone"

  class BaseCollection extends Backbone.Collection
    url : ()->
      return "https://corabastos-a-un-click-backend.herokuapp.com"

  return BaseCollection