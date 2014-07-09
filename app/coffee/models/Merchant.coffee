define (require) ->
  BaseModel = require "models/BaseModel"

  class MerchantModel extends BaseModel
    urlRoot: ()->
      return super + "/merchants"

  return MerchantModel