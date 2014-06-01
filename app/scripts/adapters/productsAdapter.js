define(function(require){
	var $ = require('jquery'),
		_ = require('underscore'),

		products = [
			{name:'Tomate chonto'},{name:'Tomate cherry'},{name:'Tomate OP'},
			{name:'Papa chonto'},{name:'Papa cherry'},{name:'Papa OP'},
			{name:'Yuca chonta'},{name:'Yuca cherry'},{name:'Yuca OP'},
			{name:'Wazones chonta'},{name:'Wazones cherry'},{name:'Wazones OP'}
		],

		findProducts = function(query) {
			var deferred = $.Deferred();
			if(query) {
				var result = _.filter(products,function(p){
					return p.name.match(query);
				});
				deferred.resolve(result);
			}
			else {
				deferred.resolve(products);
			}
			return deferred.promise();
		};

	return {
		findProducts: findProducts
	};
});