define(function(require) {

	'use strict';

	var $ = require('jquery'),
		Backbone = require('backbone'),
		StatsView = require('views/StatsView'),
		FirstTimeHomeView = require('views/FirstTimeHomeView'),
		RegisterMerchantView = require('views/RegisterMerchantView'),
		RegisterBuyerView = require('views/RegisterBuyerView'),
		LocalFormView = require('views/LocalFormView'),
		NewBuyerView = require('views/NewBuyerView'),
		MarketDemoView = require('views/MarketDemoView')
		;

	return Backbone.Router.extend({
		routes: {
			'':'home',
			'register-merchant': 'registerMerchant',
			'locals/new':'newLocal',
			'buyers/register':'registerBuyer',
			'buyers/new':'newBuyer',
			'market/demo': 'marketDemo'
		},		
		
		home: function() {
			//TODO: replace by a real 'firstTime' registry
			var firtTime = true;
			if(firtTime) {
				var firstTimeHomeView = new FirstTimeHomeView();
				firstTimeHomeView.render();	
			}
			else {
				var homeView = new HomeView();
				homeView.render();	
			}
			
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