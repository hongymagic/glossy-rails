define(function () {
	var Definition = Backbone.Model.extend({
		urlRoot: 'definitions',
		defaults: {
			term: '',
			definition: ''
		}
	});

	return {
		Definition: Definition
	};
});