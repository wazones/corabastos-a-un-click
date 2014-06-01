define(function(require){
	var $ = require('jquery'),
		locals = [{id:123},{id:678},{id:666}],

		findLocals = function() {
			var deferred = $.Deferred();

			deferred.resolve(locals);

			return deferred.promise();
		};

	return {
		findLocals:findLocals
	};
});