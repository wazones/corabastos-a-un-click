define(function(require) {

	'use strict';

	var $ = require('jquery'),
		Backbone = require('backbone'),
		HomeView = require('views/HomeView'),
		StatsView = require('views/StatsView'),
		Register1View = require('views/Register1View')
		;

	return Backbone.Router.extend({
		routes: {
			'': 'home',
			'stats': 'stats'
		},
		home: function() {
			var firtTime = true;
			if(firtTime) {
				var register1View = new Register1View();
				register1View.render();	
			}
			else {
				var homeView = new HomeView();
				homeView.render();	
			}
			
		},

		stats: function() {
			var statsView = new StatsView();
			statsView.render();
		}

	});

});