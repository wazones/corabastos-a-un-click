define (require) ->

  _ = require "underscore"
  Handler = require "handlers/Handler"
  CreateStoreView = require "views/stores/CreateStoreView"
  Store = require "models/Store"

  class StoresHandler extends Handler
    create : ->
      createStoreView = new CreateStoreView()
      return

  return StoresHandler