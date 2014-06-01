define(function(require) {
	var $ = require('jquery'),
		Handlebars = require('handlebars'),
		Backbone = require('backbone'),
		templates = require('templates'),
		localsAdapter = require('adapters/localsAdapter'),
		openFB = require('openFB'),

		registerBuyerTpl = templates['registerBuyer'];
	return Backbone.View.extend({
		el: '#content',

		render: function() {
			this.$el.html(registerBuyerTpl());
		},

		events: {
			'click .facebook-login': 'loginFacebook'
		},


		loginFacebook: function() {
			openFB.login('publish_actions',
				function() {
					console.log('Facebook login succeeded');
					require(['app'],function(app) {
						var router = app.getRouter();
						router.navigate('buyers/new', {trigger: true});
					});
				},
				function(error) {
					console.log('Ups, algo malo ha ocurrido :P');
					alert('Facebook login failed: ' + error.error_description);
				});
		}
	});
});