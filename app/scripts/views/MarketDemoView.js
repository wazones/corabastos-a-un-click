define(function(require){
	var $ = require('jquery'),
		Backbone = require('backbone'),
		templates = require('templates'),
		marketDemoTpl = templates['marketDemo'];

	return Backbone.View.extend({
		el: '#content',
		render: function() {
			this.$el.html(marketDemoTpl());
		}
	});
});