define(function(require) {

	'use strict';

	var Backbone = require('backbone'),
		StatsView = require('views/StatsView'),
		RegisterMerchantView = require('views/RegisterMerchantView'),
		RegisterBuyerView = require('views/RegisterBuyerView'),
		LocalFormView = require('views/LocalFormView'),
		NewBuyerView = require('views/NewBuyerView'),
		MarketDemoView = require('views/MarketDemoView'),
		FirstTimeHandler = require('handlers/FirstTimeHandler')
		;

	return Backbone.Router.extend({
		routes: {
			'':'home',
			'first-time/:action': 'firstTime',
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
			if(firtTime) {
				this.navigate('first-time/home',{trigger:true,replace:true});
			}
			else if(loggedin) {
				//TODO: Do something
			}
			else {
				var homeView = new HomeView();
				homeView.render();	
			}
			
		},
		firstTime: function(action) {
			var firstTimeHandler = new FirstTimeHandler();
			firstTimeHandler.handle({action:action});
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