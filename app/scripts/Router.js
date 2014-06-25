define(function(require) {

  'use strict';

  var Backbone = require('backbone'),
    RegisterMerchantView = require('views/RegisterMerchantView'),
    RegisterBuyerView = require('views/RegisterBuyerView'),
    LocalFormView = require('views/LocalFormView'),
    NewBuyerView = require('views/NewBuyerView'),
    MarketDemoView = require('views/MarketDemoView'),
    FirstTimeHandler = require('handlers/FirstTimeHandler'),
    MerchantsHandler = require('handlers/MerchantsHandler'),
    BuyersHandler = require('handlers/BuyersHandler')
    ;

  return Backbone.Router.extend({
    routes: {
      '':'home',
      'first-time/:action': 'firstTime',
      'merchants/:action': 'merchants',
      'buyers/:action': 'buyers',
      
      'register-merchant': 'registerMerchant',
      'locals/new':'newLocal',
      'buyers/register':'registerBuyer',
      'buyers/new':'newBuyer',
      'market/demo': 'marketDemo'
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
    },


    registerMerchant: function() {
      var registerMerchantView = new RegisterMerchantView();
      registerMerchantView.render();
    },

    registerBuyer: function() {
      var registerBuyerView = new RegisterBuyerView();
      registerBuyerView.render();
    },

    newLocal: function() {
      var localView = new LocalFormView();
      localView.render();
    },

    newBuyer: function() {
      var newBuyerView = new NewBuyerView();
      newBuyerView.render();
    },

    marketDemo: function() {
      var marketDemoView = new MarketDemoView();
      marketDemoView.render();  
    }

  });

});