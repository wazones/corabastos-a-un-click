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
			var that = this;

			this.$el.html(localForm({products:products}));
			productsAdapter.findProducts()
			.done(function(products){
				that.$('.container-result').html(productsListTpl({
					products:products
				}));
			});
		},

		events: {
			'keyup .find-products':'findProducts',
			'click .row-product' : 'addProductToLocal',
			'keyup .input-find-local':'findLocalKeyUp',
			'click .button-find-local':'findLocal',
			'click .button-save':'saveLocal'
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
			
		},

		findLocal: function() {
			console.log('Buscando...');
			var $findLocal = this.$('.input-find-local');
			var $localsContainer = this.$('.container-locals');
			var localNumber = $findLocal.val();
			var result = localsAdapter.findRemoteLocal(localNumber) || false;
			if(!result) {
				alert('No se encontraron locales con ese número');
				$findLocal.val('');
				$localsContainer.html('');
			}
			else {
				$localsContainer.html(remoteLocalTpl(result));
			}
			//container-locals
		},
		findLocalKeyUp: function(ev) {
			if(ev.which === 13) {
				this.findLocal();
			}
		},
		saveLocal: function(ev) {
			require(['app'],function(app) {
				var router = app.getRouter();
				router.navigate('register-merchant', {trigger: true});
			});
		}
	});
});