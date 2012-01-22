var DefinitionsRouter = Backbone.Router.extend({
	routes: {
		'': 				'list',
		'definitions/:id': 	'read'
	},

	list: function () {
		console.log('DefinitionsRouter#list');

		this.definitions = new DefinitionCollection;

		var self = this;
		this.definitions.fetch({
			success: function () {
				self.DefinitionListView = new DefinitionListView({ model: self.definitions });
				self.DefinitionListView.render();

				if (self.requestedId) {
					self.read(self.requestedId);
				}
			}
		});
	},
	
	read: function (id) {
		console.log('DefinitionsRouter#read');

		if (this.definitions) {
			this.definition = this.definitions.get(id);
			
			if (this.DefinitionListItemView) {
				this.DefinitionListItemView.close();
			}

			// TODO: this is a cheap way of re-using DefinitionListItemView
			this.DefinitionListItemView = new DefinitionListItemView({ model: this.definition });
			var el = this.DefinitionListItemView.render().el;
			$('#app').html(el);
		} else {
			this.requestedId = id;
			this.list();
		}
	}
});