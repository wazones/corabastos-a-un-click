define (require)->
  Backbone = require "backbone"
  Merchant = require "models/Merchant"
  BaseCollection = require "collections/BaseCollection"

  class MerchantsCollection extends BaseCollection
    url : ()->
      return super() + "/merchants"

    model : Merchant

  return MerchantsCollection