var DefinitionListView = Backbone.View.extend({
	el: $('#app'),

	initialize: function () {
		this.model.bind('reset', this.render, this);
		this.model.bind('add', function (definition) {
			this.el.append(new DefinitionListItemView({ mode: definition }).render().el);
		});
	},

	render: function () {
		console.log('DefinitionListView#render', this.el, this.model.toJSON());

		_.each(this.model.models, function (definition) {
			this.el.append(new DefinitionListItemView({ model: definition }).render().el);
		}, this);
		return this;
	}
});

// Part of DefinitionListView
var DefinitionListItemView = Backbone.View.extend({
	tagName: 'dl',
	template: _.template('<dt id="<%= id %>"><%= term %></dt><dd rel="<%= id %>"><%= definition %></dd>'),

	initialize: function () {
		this.model.bind('change', this.render, this);
		this.model.bind('destroy', this.close, this);
	},

	render: function () {
		console.log('DefinitionListItemView#render', this.el, this.model.toJSON());

		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	},

	close: function () {
		$(this.el).unbind().remove();
	}
});