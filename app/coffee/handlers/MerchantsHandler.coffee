define (require) ->

  _ = require("underscore")
  Handler = require("handlers/Handler")
  MerchantProfile = require("views/merchants/MerchantProfile")
  Merchant = require("models/Merchant")

  class MerchantsHandler extends Handler
    profile : ->
      # TODO: retrieve merchant from session
      merchant = new Merchant({id:1})
      profile = new MerchantProfile({model:merchant})
      return

  return MerchantsHandler
