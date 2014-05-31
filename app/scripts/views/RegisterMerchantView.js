define(function(require){
	var $ = require('jquery'),
    Handlebars = require('handlebars'),
    Backbone = require('backbone'),
    templates = require('templates'),

    registerMerchantTpl = templates['registerMerchant'];
	;
	return Backbone.View.extend({
		el: '#content',

		render: function() {
			this.$el.html(registerMerchantTpl());
		}
	});
});