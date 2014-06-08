define(function(require) {

	'use strict';

	var Router = require('Router'),
		Backbone = require('backbone'),
		$ = require('jquery'),
		openFB = require('openFB'),
		router = {},


		//====== Will be Public =========
		init = function() {
			initRouter();
			initFacebook();
		},

		//====== Private =========
		initRouter = function() {
			router = new Router();
			Backbone.history.start();
		},
		initFacebook = function() {
			/*
			var callbackUrl = 'http://localhost:9000/oauthcallback.html';
			if(window.phonegap) {
				callbackUrl = 'https://www.facebook.com/connect/login_success.html';
			}*/
			openFB.init('471881089612398');//, callbackUrl);
		},
		getRouter = function() {
			return router;
		};

	//========= Public API =============
	return {
		init: init,
		getRouter: getRouter
	};
});