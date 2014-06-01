define(function(require) {
	var $ = require('jquery'),
		Handlebars = require('handlebars'),
		Backbone = require('backbone'),
		templates = require('templates'),
		localsAdapter = require('adapters/localsAdapter'),

		localForm = templates['localForm'];
	return Backbone.View.extend({
		el: '#content',

		render: function() {
			that.$el.html(localForm());
		}
	});
});