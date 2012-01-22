var Definition = Backbone.Model.extend({
	urlRoot: 'definitions',
	defaults: {
		term: '',
		definition: ''
	}
});