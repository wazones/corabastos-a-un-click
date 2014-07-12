define (require) ->
  BaseModel = require "models/BaseModel"

  class Store extends BaseModel
    urlRoot: ()->
      return super + "/stores"

  return Store