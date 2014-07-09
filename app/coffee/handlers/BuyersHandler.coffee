define (require) ->

  _ = require "underscore"
  Handler = require "handlers/Handler"
  BuyerProfile = require "views/buyers/BuyerProfile"

  class BuyersHandler extends Handler
    profile : ->
      profile = new BuyerProfile()
      profile.render()
      return

  return BuyersHandler
