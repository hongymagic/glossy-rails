define(['text!assets/definitions/index.html.mustache'], function (definitionsIndexTemplate) {
	console.log(definitionsIndexTemplate);
	
	var DefinitionListView = Backbone.View.extend({
		tagName: 'dl',
		id: 'defintions',

		initialize: function () {
			this.model.bind('reset', this.render, this);
			this.model.bind('add', function (definition) {
				$(this.el).append(new DefinitionListItemView({ mode: definition }).render().el);
			});
		},

		render: function () {
			console.log('DefinitionListView#render', this.el, this.model.toJSON());

			_.each(this.model.models, function (definition) {
				$(this.el).append(new DefinitionListItemView({ model: definition }).render().el);
			}, this);
			return this;
		}
	});

	// Part of DefinitionListView
	var DefinitionListItemView = Backbone.View.extend({
		template: _.template('<dt id=<%= term %>><dfn><%= term %></dfn></dt><dd><%= definition %></dd>'),

		initialize: function () {
			this.model.bind('change', this.render, this);
			this.model.bind('destroy', this.close, this);
		},

		render: function () {
			console.log('DefinitionListItemView#render', this.el, this.model.toJSON());

			this.el = $(this.template(this.model.toJSON()));
			return this;
		},

		close: function () {
			$(this.el).unbind().remove();
		}
	});

	return {
		DefinitionListView: DefinitionListView,
		DefinitionListItemView: DefinitionListItemView
	};
});