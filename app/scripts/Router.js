define(function(require) {

	'use strict';

	var $ = require('jquery'),
		Backbone = require('backbone'),
		HomeView = require('views/HomeView'),
		StatsView = require('views/StatsView'),
		FirstTimeHomeView = require('views/FirstTimeHomeView'),
		RegisterMerchantView = require('views/RegisterMerchantView')
		;

	return Backbone.Router.extend({
		routes: {
			'':'home',
			'register-merchant': 'registerMerchant',
			'register-buyer': 'registerBuyer'
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
			var statsView = new StatsView();
			statsView.render();
		}

	});

});