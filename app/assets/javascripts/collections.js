define(['Models'], function (Models) {
	var DefinitionCollection = Backbone.Collection.extend({
		model: Models.Definition,
		url: '/definitions'
	});

	return {
		DefinitionCollection: DefinitionCollection
	};
});