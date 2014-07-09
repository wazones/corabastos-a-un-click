define (require) ->

  _ = require("underscore")
  Handler = require("handlers/Handler")
  MerchantProfile = require("views/merchants/MerchantProfile")

  class MerchantsHandler extends Handler
    profile : ->
      profile = new MerchantProfile()
      profile.render()
      return

  return MerchantsHandler
