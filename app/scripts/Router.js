define(function(require) {

  'use strict';

  var Backbone = require('backbone'),
    FirstTimeHandler = require('handlers/FirstTimeHandler'),
    BuyersHandler = require('handlers/BuyersHandler'),
    MerchantsHandler = require('handlers/MerchantsHandler')

    ;

  return Backbone.Router.extend({
    routes: {
      '':'home',
      'first-time/:action': 'firstTime',
      'merchants/:action': 'merchants',
      'buyers/:action': 'buyers'
    },

    home: function() {
      //TODO: replace by a real 'firstTime' registry
      var firtTime = true;
      var loggedin = false;
      if(loggedin) {
        //TODO: Do something when logged in
        console.log('user is logged in');
      }
      else {
        this.navigate('/first-time/home',{trigger:true,replace:true});
      }
    },
    firstTime: function(action) {
      var firstTimeHandler = new FirstTimeHandler();
      firstTimeHandler.handle({action:action});
    },
    merchants: function(action) {
      var merchantsHandler = new MerchantsHandler();
      merchantsHandler.handle({action:action});
    },
    buyers: function(action) {
      var buyersHandler = new BuyersHandler();
      buyersHandler.handle({action:action});
    }

  });

});