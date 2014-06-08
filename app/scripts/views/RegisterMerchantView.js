define(function(require) {
	var $ = require('jquery'),
		Handlebars = require('handlebars'),
		Backbone = require('backbone'),
		templates = require('templates'),
		localsAdapter = require('adapters/localsAdapter'),

		registerMerchantTpl = templates['registerMerchant'];;
	return Backbone.View.extend({
		el: '#content',

		render: function() {
			var that = this;
			localsAdapter.findLocals()
				.done(function(locals) {
					that.$el.html(registerMerchantTpl({
						locals: locals
					}));
				});
		},

		events: {
			'click .button-save': 'saveMerchant'
		},

		saveMerchant: function(ev) {
			require(['app'],function(app) {
				var router = app.getRouter();
				router.navigate('', {trigger: true});
			});
		}
	});
});