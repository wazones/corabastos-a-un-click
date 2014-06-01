define(function(require) {
	var $ = require('jquery'),
		Handlebars = require('handlebars'),
		Backbone = require('backbone'),
		templates = require('templates'),
		localsAdapter = require('adapters/localsAdapter'),
		productsAdapter = require('adapters/productsAdapter'),

		localForm = templates['localForm'],
		productsListTpl = templates['productsList']
		;

	return Backbone.View.extend({
		el: '#content',

		render: function() {
			var products = [{name:'Tomate cherry'},{name:'Tomate OP'},{name:'Tomate chonto'}];
			this.$el.html(localForm({products:products}));
		},

		events: {
			'keyup .find-products':'findProducts',
			'click .row-product' : 'addProductToLocal'
			//click a producto
		},

		findProducts: function(ev) {
			console.log(this.$(ev.currentTarget).val());
			var that = this;
			this.findProductsQuery = this.$('.find-products').val();

			productsAdapter.findProducts(this.findProductsQuery)
			.done(function(products){
				console.log('PRODS:');
				console.log(products);
				console.log(productsListTpl());
				that.$('.container-result').html(productsListTpl({
					products:products
				}));
			});
		},

		addProductToLocal: function(ev) {
			alert('TODO: add product to local');
		}
	});
});