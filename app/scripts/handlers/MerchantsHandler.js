define(function(require) {
  'use strict';
  var _ = require('underscore'),
    Handler = require('handlers/Handler'),
    MerchantProfile = require('views/merchants/MerchantProfile')
  ;

  function MerchantsHandler() {

  };
  MerchantsHandler.prototype = Handler.prototype;

  MerchantsHandler.prototype.profile = function() {
    var profile = new MerchantProfile();
    profile.render();
  };
  
  return MerchantsHandler;
});