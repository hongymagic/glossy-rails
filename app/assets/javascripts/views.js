define([
		'Mustache', 
		'text!assets/definitions/index.html.mustache',
		'text!assets/definitions/_definition.html.mustache'
	], function (Mustache, $$list, $$item) {
	var DefinitionListView = Backbone.View.extend({
		template: $$list,

		// This is the view model required by the Mustache templates
		viewModel: function () {
			return {
				listing: this.model.toJSON()
			};
		},

		initialize: function () {
			this.model.bind('reset', this.render, this);
			this.model.bind('add', function (definition) {
				$(this.el).append(new DefinitionListItemView({ model: definition }).render().el);
			});
		},

		render: function () {
			console.log('DefinitionListView#render', this.el, this.model.toJSON());

 			this.el = Mustache.to_html(this.template, this.viewModel(), { definition: $$item });
			return this;
		}
	});

	// Part of DefinitionListView
	var DefinitionListItemView = Backbone.View.extend({
		template: $$item,

		initialize: function () {
			this.model.bind('change', this.render, this);
			this.model.bind('destroy', this.close, this);
		},

		render: function () {
			console.log('DefinitionListItemView#render', this.el, this.model.toJSON());

			this.el = Mustache.to_html(this.template, this.model.toJSON());
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