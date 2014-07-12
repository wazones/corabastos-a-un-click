define (require) ->

  Backbone = require "backbone"
  FirstTimeHandler = require "handlers/FirstTimeHandler"
  BuyersHandler = require "handlers/BuyersHandler"
  MerchantsHandler = require "handlers/MerchantsHandler"
  StoresHandler = require "handlers/StoresHandler"

  class Router extends Backbone.Router
    routes:
      "": "home"
      "first-time/:action" : "firstTime"
      "merchants/:action" : "merchants"
      "buyers/:action" : "buyers"
      "stores/:action" : "stores"

    home : ()->

      #TODO: replace by a real 'firstTime' registry
      firtTime = true
      loggedin = false
      if loggedin
        #TODO: Do something when logged in
        console.log "user is logged in"
      else
        @.navigate "/first-time/home",
          trigger: true
          replace: true
      return

    firstTime : (action)->
      firstTimeHandler = new FirstTimeHandler()
      firstTimeHandler.handle {action: action}
      return

    merchants : (action) ->
      merchantsHandler = new MerchantsHandler()
      merchantsHandler.handle {action: action}
      return

    buyers : (action) ->
      buyersHandler = new BuyersHandler()
      buyersHandler.handle {action: action}
      return

    stores: (action) ->
      storesHandler = new StoresHandler()
      storesHandler.handle {action: action}
      return

  return Router