define(function(require) {
  'use strict';
  var _ = require('underscore'),
    Handler = require('handlers/Handler'),
    BuyerProfile = require('views/buyers/BuyerProfile')
  ;

  function FirstTimeHandler() {

  };
  FirstTimeHandler.prototype = Handler.prototype;

  FirstTimeHandler.prototype.profile = function() {
    var profile = new BuyerProfile();
    profile.render();
  };
  return FirstTimeHandler;
});