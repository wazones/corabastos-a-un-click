define(function(require) {
	var $ = require('jquery'),
		Backbone = require('backbone'),
		templates = require('templates'),
		newBuyerTpl = templates['newBuyer'];

	return Backbone.View.extend({
		el: '#content',

		render: function() {
			var that = this;
			openFB.api({
				path: '/me',
				params: {
					fields: 'first_name,last_name,picture.type(large)'
				},
				success: function(data) {
					console.log('Oh si');
					console.log(data);
					that.$el.html(newBuyerTpl({
						profileImageUrl: data.picture.data.url,
						firstName: data.first_name,
						lastName: data.last_name
					}));
				},
				error: function(err) {
					alert('Algo malo ha ocurrido :P. Twitealo a @Daniellogic.');
				}
			});
		},

		events: {
			'click .button-logout': 'logout'
		},

		logout: function() {
			openFB.logout();
			require(['app'],function(app){
				var router = app.getRouter();
				router.navigate('buyers/register', {trigger: true});
			});
		}
	});
});