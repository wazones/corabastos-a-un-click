define (require)->
  Backbone = require "backbone"
  Store = require "models/Store"
  BaseCollection = require "collections/BaseCollection"

  class StoresCollection extends BaseCollection
    url : ()->
      return super() + "/stores"

    model : Store

  return StoresCollection