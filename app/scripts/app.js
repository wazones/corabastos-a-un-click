define(function(require) {

	'use strict';

	var Router = require('Router'),
		NavbarView = require('views/NavbarView'),
		Backbone = require('backbone'),
		$ = require('jquery'),

		//====== Will be Public =========
		init = function() {
			initRouter();
		},

		//====== Private =========
		initRouter = function() {
			var router = new Router();
			Backbone.history.start();
		};

	//========= Public API =============
	return {
		init: init
	};
});