define (require)->
  _ = require "underscore"
  class Handler
    handle : (opts)->
      opts = _.extend(
        {action: "home"}
        opts
      )
      @[opts.action]()
      return

  return Handler
