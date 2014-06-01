define(function(require) {
	var $ = require('jquery'),
		Handlebars = require('handlebars'),
		Backbone = require('backbone'),
		templates = require('templates'),
		localsAdapter = require('adapters/localsAdapter'),
		productsAdapter = require('adapters/productsAdapter'),

		localForm = templates['localForm'],
		remoteLocalTpl = templates['remoteLocal'],
		productsListTpl = templates['productsList'];

	return Backbone.View.extend({
		el: '#content',

		render: function() {
			var products = [{name:'Tomate cherry'},{name:'Tomate OP'},{name:'Tomate chonto'}];
			this.$el.html(localForm({products:products}));
		},

		events: {
			'keyup .find-products':'findProducts',
			'click .row-product' : 'addProductToLocal',
			'keyup .input-find-local':'findLocalKeyUp',
			'click .button-find-local':'findLocal'
			//click a producto
		},

		findProducts: function(ev) {
			console.log(this.$(ev.currentTarget).val());
			var that = this;
			this.findProductsQuery = this.$('.find-products').val();

			productsAdapter.findProducts(this.findProductsQuery)
			.done(function(products){
				that.$('.container-result').html(productsListTpl({
					products:products
				}));
			});
		},
		addProductToLocal: function(ev) {
			alert('TODO: add product to local');
		},

		findLocal: function() {
			console.log('Buscando...');
			var $findLocal = this.$('.input-find-local');
			var localNumber = $findLocal.val();
			var result = localsAdapter.findRemoteLocal(localNumber) || false;
			if(!result) {
				alert('No se encontraron locales con ese número');
				$findLocal.val('');
			}
			else {
				this.$('.container-locals').html(remoteLocalTpl(result));
			}
			//container-locals
		},
		findLocalKeyUp: function(ev) {
			if(ev.which === 13) {
				this.findLocal();
			}
		}
	});
});